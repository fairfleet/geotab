using Reinforced.Typings;
using Reinforced.Typings.Ast;
using Reinforced.Typings.Generators;

internal class InterfaceDocumentationBeautifier : InterfaceCodeGenerator
{
  public override RtInterface? GenerateNode(Type element, RtInterface result, TypeResolver resolver)
  {
    var rt = base.GenerateNode(element, result, resolver);
    if (rt == null)
    {
      return null;
    }

    rt.Documentation = Documentation.Beautify(rt.Documentation ?? new RtJsdocNode());

    foreach (var field in rt.Members.OfType<RtField>().Where(x => x.Documentation != null))
    {
      field.Documentation = Documentation.Beautify(field.Documentation);
    }

    return rt;
  }
}
