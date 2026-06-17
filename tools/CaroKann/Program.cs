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
          .WithProperties(p => !p.Name.Contains('.'))
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

  // Collect all .ts files except the barrel itself.
  var allPaths = Directory.EnumerateFiles("src/types", "*.ts", SearchOption.AllDirectories)
    .Select(x => x.Replace("src/types/", "").Replace(".ts", ""))
    .Where(x => x != "index")
    .OrderBy(x => x)
    .ToList();

  // Detect export-name collisions across wildcard re-exports.  When two files
  // export the same identifier, TS rejects the ambiguous `export *`.  We parse
  // each file for its `export (type|interface|const|enum|function) Name` tokens,
  // track which path "wins" the name (first one alphabetically keeps `export *`),
  // and for later conflicts emit explicit aliased exports instead.
  var nameToPath = new Dictionary<string, string>(StringComparer.Ordinal);
  var conflicts = new List<(string path, string name, string alias)>();

  foreach (var path in allPaths)
  {
    var src = File.ReadAllText($"src/types/{path}.ts");
    // Match: export (type|interface|enum|const|function|abstract class) Identifier
    var matches = System.Text.RegularExpressions.Regex.Matches(
      src, @"^export\s+(?:type\s+)?(?:interface|enum|const|function|abstract\s+class|type|class)\s+(\w+)",
      System.Text.RegularExpressions.RegexOptions.Multiline);
    foreach (System.Text.RegularExpressions.Match m in matches)
    {
      var name = m.Groups[1].Value;
      if (!nameToPath.TryAdd(name, path))
      {
        // Conflict: derive alias from the directory segment + name.
        var dir = System.IO.Path.GetDirectoryName(path)?.Replace("/", "").Replace("\\", "") ?? "";
        var alias = string.IsNullOrEmpty(dir) ? name : $"{dir}{name}";
        conflicts.Add((path, name, alias));
      }
    }
  }

  // Build the set of paths that have at least one conflicting export name.
  var conflictPaths = new HashSet<string>(conflicts.Select(c => c.path));

  // Emit wildcard re-exports for non-conflicting paths.
  new TypescriptExportListGenerator(allPaths.Where(p => !conflictPaths.Contains(p))).Generate(content);

  // Emit explicit named re-exports (with aliases) for conflicting paths.
  foreach (var (path, name, alias) in conflicts.OrderBy(c => c.path).ThenBy(c => c.name))
  {
    if (name == alias)
      content.AppendLine($"export {{ {name} }} from \"./{path}\";");
    else
      content.AppendLine($"export {{ {name} as {alias} }} from \"./{path}\";");
  }

  File.WriteAllText($"./src/types/index.ts", content.ToString());
}

WriteTypeMap("SearchTypes", entityTypesAndSearchTypes.Where(Types.IsSearchType), new Regex("Search$"));
WriteTypeMap("EntityTypes", entityTypesAndSearchTypes.Where(Types.IsEntityType));
WriteIndex();