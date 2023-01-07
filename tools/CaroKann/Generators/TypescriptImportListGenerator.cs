
using System.Text;

/// <summary>
/// Generates Typescript code that imports the generated Typescript files for the given types.
/// </summary>
public class TypescriptImportListGenerator
{
  private readonly IEnumerable<Type> types;
  private readonly IEnumerable<(string Path, string Name)> additionalImports;

  public TypescriptImportListGenerator(IEnumerable<Type>? types = default, IEnumerable<(string Path, string Name)>? additionalImports = default)
  {
    this.types = types ?? Enumerable.Empty<Type>();
    this.additionalImports = additionalImports ?? Enumerable.Empty<(string Path, string Name)>();
  }

  public void Generate(StringBuilder content)
  {
    foreach (var type in types.OrderBy(type => type.Namespace).ThenBy(type => type.Name))
    {
      var typePath = (type.Namespace ?? "").Replace("Geotab.", "").Replace(".", "/");

      content.AppendLine($"import {{ {type.Name} }} from \"./{typePath}/{type.Name}\";");
    }

    foreach (var (path, name) in additionalImports.OrderBy(x => x.Path))
    {
      content.AppendLine($"import {{ {name} }} from \"./{path}\";");
    }
  }
}