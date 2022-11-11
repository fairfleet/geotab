
using Reinforced.Typings;
using Reinforced.Typings.Ast;
using Reinforced.Typings.Visitors.TypeScript;

namespace CaroKann.Visitors;

public partial class CaroKannExportVisitor : TypeScriptExportVisitor
{
  public override void Visit(RtEnum node)
  {
    if (node == null) return;
    if (node.EnumName.TypeName.Contains("Known"))
    {
      Console.WriteLine(node.EnumName.TypeName);
      base.Visit(node);
    }
    else
    {
      WriteUnionEnum(node);
    }
  }

  void WriteUnionEnum(RtEnum node)
  {
    Visit(node.Documentation);
    var prev = Context;
    Context = WriterContext.Enum;
    AppendTabs();
    if (node.Export) Write("export ");
    Write("type ");
    Visit(node.EnumName);
    Write(" = ");

    var arr = node.Values.ToArray();
    for (int i = 0; i < arr.Length; i++)
    {
      Write(arr[i].EnumValue);
      if (i != arr.Length - 1) WriteLine(" | ");
    }

    WriteLine(";");

    Context = prev;
  }

}