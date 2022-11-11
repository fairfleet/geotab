using Geotab.Checkmate.ObjectModel;
using Reinforced.Typings;
using Reinforced.Typings.Ast;
using Reinforced.Typings.Generators;

namespace CaroKann.Generators;

public class KnownIdsEnumGenerator : EnumGenerator
{
  public override RtEnum? GenerateNode(Type element, RtEnum result, TypeResolver resolver)
  {
    var rt = base.GenerateNode(element, result, resolver);
    if (rt == null)
    {
      return null;
    }

    var knownId = typeof(KnownId);

    var doc = Context.Documentation.GetDocumentationMember(element);
    if (doc != null)
    {
      var docNode = new RtJsdocNode();
      if (doc.InheritDoc != null) docNode.AddTag(DocTag.Inheritdoc);
      if (doc.Summary != null) docNode.Description = doc.Summary.Text;
      result.Documentation = docNode;
    }

    foreach (var property in knownId.GetProperties())
    {
      var value = new RtEnumValue();

      var propertyDoc = Context.Documentation.GetDocumentationMember(property);
      if (propertyDoc != null)
      {
        var jsDoc = new RtJsdocNode();

        if (!string.IsNullOrEmpty(propertyDoc?.Summary?.Text ?? ""))
          jsDoc.Description = propertyDoc?.Summary.Text;

        value.Documentation = jsDoc;
      }

      value.EnumValue = $"'{property.GetValue(null)}'";
      value.EnumValueName = property.Name;

      rt.Values.Add(value);
    }

    return rt;
  }
}