using System.Reflection;
using System.Text.RegularExpressions;
using Geotab.Checkmate.ObjectModel;

internal class Types
{
  private readonly Assembly assembly;

  public Types(Assembly assembly)
  {
    this.assembly = assembly;
  }

  public IEnumerable<Type> GetEntityAndSearchTypes()
  {
    var entityTypes = this.GetEntityTypes();
    var searchTypes = this.GetSearchTypes();

    return Enumerable.Concat(entityTypes, searchTypes)
      .Concat(entityTypes
        .SelectMany(x => x.GetProperties())
        .Select(prop => prop.PropertyType)
        .Where(IsCompanionType)
      )
      .Concat(searchTypes
        .SelectMany(x => x.GetProperties())
        .Select(prop => prop.PropertyType)
        .Where(IsCompanionType)
      )
      .Concat(new[]
      {
        typeof(Entity),
        typeof(EntityWithVersion),
        typeof(Search),
        typeof(NameEntity),
        typeof(NameEntityWithVersion),
      })
      .ToList();
  }

  public IEnumerable<Type> GetEntityTypes() =>
    assembly.GetTypes().Where(IsEntityType);

  public IEnumerable<Type> GetSearchTypes() =>
    assembly.GetTypes().Where(IsSearchType);

  public IEnumerable<Type> GetEnumTypes() =>
    assembly
          .GetTypes()
          .Where(type => type.Namespace?.StartsWith("Geotab") == true)
          .Where(type => type.IsEnum);

  bool IsEntityType(Type type) =>
    this.IsValidNamedType(type) &&
    type.Namespace?.StartsWith("Geotab") == true &&
    type.IsClass &&
    type.IsAssignableTo(typeof(IEntity)) &&
    type.Assembly.GetType(string.Join('.', type.Namespace!, type.Name + "Search")) != null;

  bool IsSearchType(Type type) =>
    this.IsValidNamedType(type) &&
    type.Name.EndsWith("Search") &&
    type.IsClass &&
    type.Namespace?.StartsWith("Geotab") == true &&
    type.IsAssignableTo(typeof(Search)) &&
    type.Assembly.GetType(string.Join('.', type.Namespace!, Regex.Replace(type.Name, "Search$", ""))) != null;

  bool IsCompanionType(Type type) =>
    this.IsValidNamedType(type) &&
    type.IsClass &&
    type.Namespace?.StartsWith("Geotab") == true &&
    type.GetProperties().Length > 0;

  bool IsValidNamedType(Type type) =>
    Regex.IsMatch(type.Name, @"^[$_\p{Lu}\p{Ll}\p{Lt}\p{Lm}\p{Lo}\p{Nl}]+[$_\p{Lu}\p{Ll}\p{Lt}\p{Lm}\p{Lo}\p{Nl}\p{Mn}\p{Mc}\p{Nd}\p{Pc}]*$");
}