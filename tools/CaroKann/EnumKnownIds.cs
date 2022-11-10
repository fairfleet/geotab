using System.Reflection;
using Geotab.Checkmate.ObjectModel;
using Reinforced.Typings;
using Reinforced.Typings.Ast;
using Reinforced.Typings.Ast.TypeNames;
using Reinforced.Typings.Generators;

namespace Geotab.Checkmate.ObjectModel
{
  public enum KnownIdPlaceholder
  {
  }
}

internal class KnownIdGenerator : EnumGenerator
{
  public override RtEnum? GenerateNode(Type element, RtEnum result, TypeResolver resolver)
  {
    var rt = base.GenerateNode(element, result, resolver);
    if (rt == null)
    {
      return null;
    }

    var knownId = typeof(KnownId);

    rt.Documentation = new RtJsdocNode();
    rt.Documentation.Description = "System defined identifiers.";

    foreach (var property in knownId.GetProperties())
    {
      var value = new RtEnumValue();

      var doc = Context.Documentation.GetDocumentationMember(property);
      if (doc != null)
      {
        var jsDoc = new RtJsdocNode();

        if (!string.IsNullOrEmpty(doc?.Summary?.Text ?? ""))
          jsDoc.Description = doc?.Summary.Text;

        value.Documentation = jsDoc;
      }

      value.EnumValue = $"'{property.GetValue(null)}'";
      value.EnumValueName = property.Name;

      rt.Values.Add(value);
    }

    return rt;
  }
}