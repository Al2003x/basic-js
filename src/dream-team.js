module.exports = function createDreamTeam(members) {
  let newArr = [];
  if ({}.toString.call(members) !== "[object Array]") {
    return false;
  }
  members.forEach(function(word) {
    if (typeof word === "string") {
      let a = word.toUpperCase().trim();
      return newArr.push(a[0]);
    }
  });
  let result = newArr.sort().join("");
  return result;
};