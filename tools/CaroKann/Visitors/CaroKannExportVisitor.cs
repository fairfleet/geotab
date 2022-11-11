
using Reinforced.Typings;
using Reinforced.Typings.Ast;
using Reinforced.Typings.Visitors.TypeScript;

namespace CaroKann.Visitors;

public partial class CaroKannExportVisitor : TypeScriptExportVisitor
{
  public CaroKannExportVisitor(TextWriter writer, ExportContext exportContext) : base(writer, exportContext)
  {
  }
}