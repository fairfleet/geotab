using System.Text;
using System.Text.RegularExpressions;
using CaroKann.Generators;
using CaroKann.Visitors;
using Geotab.Checkmate.ObjectModel;
using Geotab.Checkmate.ObjectModel.Fuel;
using Reinforced.Typings;
using Reinforced.Typings.Ast.TypeNames;
using Reinforced.Typings.Fluent;

var assembly = typeof(IEntity).Assembly;
var assemblyPath = assembly.Location;
var documentationPath = assemblyPath.Replace(".dll", ".xml");
var types = new Types(assembly);
var entityTypesAndSearchTypes = types.GetEntityAndSearchTypes();

new TsExporter(
  new ExportContext(new[] { typeof(IEntity).Assembly })
  {
    Hierarchical = true,
    TargetDirectory = "./src/types",
    DocumentationFilePath = documentationPath,
    ConfigurationMethod = (ConfigurationBuilder builder) =>
    {
      builder.Global(conf => conf
        .TabSymbol("  ")
        .UseVisitor<CaroKannExportVisitor>()
        .UseModules(true, true)
        .ReorderMembers(true)
        .UnresolvedToUnknown(true)
        .CamelCaseForMethods(true)
        .CamelCaseForProperties(true)
        .GenerateDocumentation(true)
        .RootNamespace("Geotab")
      );

      builder.ExportAsInterfaces(
        entityTypesAndSearchTypes
          .Concat(new[]
          {
            typeof(Credentials),
            typeof(LoginResult),
            typeof(VersionInformation),
            typeof(FuelEvent),
            typeof(ReverseGeocodeAddress),
          }),
        conf => conf
          .AutoI(false)
          .Substitute(typeof(Id), new RtSimpleTypeName("string"))
          .Substitute(typeof(Guid), new RtSimpleTypeName("string"))
          .Substitute(typeof(DateTime), new RtSimpleTypeName("Date"))
          .Substitute(typeof(TimeSpan), new RtSimpleTypeName("string"))
          .WithAllProperties()
      );

      builder.ExportAsEnums(
        types.GetEnumTypes(),
        conf => conf.UseString(true)
      );

      builder
        .ExportAsEnum<KnownIdsEnumPlaceholder>()
        .WithCodeGenerator<KnownIdsEnumGenerator>()
        .OverrideName("KnownId")
        .OverrideNamespace("Geotab.Checkmate.ObjectModel");

    },
  }
)
  .Export();

void WriteTypeMap(string name, IEnumerable<Type> types, Regex? nameRemoveRegex = null)
{
  var content = new StringBuilder();
  new TypescriptTypeMapGenerator(name, types, nameRemoveRegex).Generate(content);
  File.WriteAllText($"./src/types/{name}.ts", content.ToString());
}

void WriteIndex()
{
  var content = new StringBuilder();
  var exports = Directory.EnumerateFiles("src/types", "*.ts", SearchOption.AllDirectories)
    .Select(x => x.Replace("src/types/", "").Replace(".ts", ""))
    .Where(x => x != "index")
    .OrderBy(x => x);

  new TypescriptExportListGenerator(exports).Generate(content);

  File.WriteAllText($"./src/types/index.ts", content.ToString());
}

WriteTypeMap("SearchTypes", entityTypesAndSearchTypes.Where(Types.IsSearchType), new Regex("Search$"));
WriteTypeMap("EntityTypes", entityTypesAndSearchTypes.Where(Types.IsEntityType));
WriteIndex();