// Code your solution here
function findMatching(drivers, string) {
  return drivers.filter(
    (element) => element.toUpperCase() == string.toUpperCase()
  );
}
function fuzzyMatch(drivers, string) {
  return drivers.filter((element) =>
    element.toUpperCase().startsWith(string.toUpperCase())
  );
}
function matchName(drivers, string) {
  return drivers.filter(
    (element) => element.name.toUpperCase() == string.toUpperCase()
  );
}
