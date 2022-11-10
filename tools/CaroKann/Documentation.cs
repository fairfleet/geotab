
using System.Text.RegularExpressions;
using Reinforced.Typings.Ast;

internal class Documentation
{
  static Regex seeHrefExpr = new Regex(@"<see(?:also)? href=""([^""]+)""(?:\s*\/>|\s*>\s*<\/see\s*>)");
  static Regex seeHrefValExpr = new Regex(@"<see(?:also)? href=""([^""]+)""\s*>([^<]+)</see\s*>");

  static Regex seeTypeExpr = new Regex(@"<see(?:also)? cref=""T:(?:[^""])+\.([^\.]+)""(?:\s*\/>|\s*>\s*<\/see\s*>)");
  static Regex seeTypeValExpr = new Regex(@"<see(?:also)? cref=""T:(?:[^""])+\.([^\.]+)""\s*>([^<]+)</see\s*>");

  static Regex seeFieldExpr = new Regex(@"<see(?:also)? cref=""F:(?:[^""])+\.([^\.]+\.[^\.]+)""(?:\s*\/>|\s*>\s*<\/see\s*>)");
  static Regex seeFieldValExpr = new Regex(@"<see(?:also)? cref=""F:(?:[^""])+\.([^\.]+\.[^\.]+)""\s*>([^<]+)</see\s*>");

  static Regex seePropertyExpr = new Regex(@"<see(?:also)? cref=""P:(?:[^""])+\.([^\.]+\.[^\.]+)""(?:\s*\/>|\s*>\s*<\/see\s*>)");
  static Regex seePropertyValExpr = new Regex(@"<see(?:also)? cref=""P:(?:[^""])+\.([^\.]+\.[^\.]+)""\s*>([^<]+)</see\s*>");

  static Regex categoryExpr = new Regex(@"<category>([^<]+)</category>");
  static Regex isSupportedExpr = new Regex(@"<isSupported>([^<]+)</isSupported>");
  static Regex isSupportedBetaExpr = new Regex(@"<isSupported\s*beta=""(?:[^""]+)""\s*>([^<]+)</isSupported>");
  static Regex valueExpr = new Regex(@"<value>([^<]+)</value>");
  static Regex linesExpr = new Regex(@"^\s+$[\r\n]*", RegexOptions.Multiline);
  static Regex whitespaceExpr = new Regex(@"[ \t]{2,}");
  static Regex remarksBegExpr = new Regex(@"\s*<remarks>\s*");
  static Regex remarksEndExpr = new Regex(@"\s*</remarks>\s*");
  static Regex paraExpr = new Regex(@"(<para>|</para>)");

  public static RtJsdocNode Beautify(RtJsdocNode doc)
  {
    if (doc == null)
    {
      return null;
    }

    var description = doc.Description ?? "";

    var isSupported = isSupportedExpr.Match(description);
    if (isSupported.Success)
    {
      if (isSupported.Groups[1].Value.Contains("f", StringComparison.OrdinalIgnoreCase))
      {
        doc.AddTag(DocTag.Deprecated, "");
      }
    }

    description = paraExpr.Replace(description, string.Empty);
    description = linesExpr.Replace(description, string.Empty);
    description = whitespaceExpr.Replace(description, " ");
    description = categoryExpr.Replace(description, string.Empty);
    description = isSupportedExpr.Replace(description, string.Empty);
    description = isSupportedBetaExpr.Replace(description, string.Empty);

    description = seeHrefExpr.Replace(description, "{@link $1}");
    description = seeTypeExpr.Replace(description, "{@link $1}");
    description = seeFieldExpr.Replace(description, "{@link $1}");
    description = seePropertyExpr.Replace(description, "{@link $1}");

    description = seeHrefValExpr.Replace(description, "{@link $1 $2}");
    description = seeTypeValExpr.Replace(description, "{@link $1 $2}");
    description = seeFieldValExpr.Replace(description, "{@link $1 $2}");
    description = seePropertyValExpr.Replace(description, "{@link $1 $2}");

    description = valueExpr.Replace(description, " ");

    foreach (var beg in remarksBegExpr.Matches(description).OfType<Match>())
    {
      if (!beg.Success)
        continue;

      // Find the next instance of </remarks> in description starting after found 
      // `<remarks>` tag.
      var end = remarksEndExpr.Match(description[beg.Index..]);
      if (!end.Success)
      {
        // There isn't a closing tag.  We should probably throw an error here but, for now
        // I will just stop processing `<remarks>` elements.
        Console.WriteLine("No closing for <remarks>");
        break;
      }

      try
      {

        var begIdx = beg.Index + beg.Length;
        var endIdx = beg.Index + end.Index;
        var value = description[begIdx..endIdx];

        description = description[..beg.Index] + description[(endIdx + end.Length)..];
        description = description + "\n \n@remarks " + value;
      }
      catch (Exception ex)
      {
        Console.WriteLine($"{beg.Index}, {end.Index}");
        Console.WriteLine(ex);
      }
    }

    doc.Description = description;

    return doc;
  }
}
