
using System.Text;
using System.Text.RegularExpressions;
/// <summary>
/// Generates Typescript code that exports a named constant map of the given types.
/// </summary>
public class TypescriptTypeMapGenerator
{
  private readonly string name;
  private readonly IEnumerable<Type> types;
  private readonly Regex? nameRemoveRegex;
  private readonly TypescriptImportListGenerator importListGenerator;

  public TypescriptTypeMapGenerator(string name, IEnumerable<Type> types, Regex? nameRemoveRegex = default)
  {
    this.name = name;
    this.types = types;
    this.nameRemoveRegex = nameRemoveRegex;
    this.importListGenerator = new TypescriptImportListGenerator(types);
  }

  public void Generate(StringBuilder content)
  {
    this.importListGenerator.Generate(content);

    content.AppendLine();
    content.AppendLine($"export type {name} = {{");

    foreach (var type in types)
    {
      var name = type.Name;
      if (nameRemoveRegex != null)
      {
        name = nameRemoveRegex.Replace(name, "");
      }

      content.AppendLine($"  {name}: {type.Name};");
    }

    content.AppendLine("};");
  }
}