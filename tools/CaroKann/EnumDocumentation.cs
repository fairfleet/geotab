using Reinforced.Typings;
using Reinforced.Typings.Ast;
using Reinforced.Typings.Generators;

internal class EnumDocumentationBeautifier : EnumGenerator
{
  public override RtEnum? GenerateNode(Type element, RtEnum result, TypeResolver resolver)
  {
    var rt = base.GenerateNode(element, result, resolver);
    if (rt == null)
    {
      return null;
    }

    rt.Documentation = Documentation.Beautify(rt.Documentation);

    foreach (var value in rt.Values)
    {
      value.Documentation = Documentation.Beautify(value.Documentation);
    }

    return rt;
  }
}