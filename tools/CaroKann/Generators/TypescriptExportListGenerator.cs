
using System.Text;

/// <summary>
/// Generates Typescript code that exports the generated Typescript files for the given types.
/// </summary>
public class TypescriptExportListGenerator
{
  private readonly IEnumerable<string> exports;

  public TypescriptExportListGenerator(IEnumerable<string> exports)
  {
    this.exports = exports;
  }

  public void Generate(StringBuilder content)
  {
    foreach (var path in exports)
    {
      content.AppendLine($"export * from \"./{path}\";");
    }
  }
}