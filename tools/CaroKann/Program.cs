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
        types
          .GetEntityAndSearchTypes()
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

