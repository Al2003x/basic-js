module.exports = function getSeason(date) {
  let seasons = {
    0: "winter",
    1: "winter",
    2: "spring",
    3: "spring",
    4: "spring",
    5: "summer",
    6: "summer",
    7: "summer",
    8: "autumn",
    9: "autumn",
    10: "autumn",
    11: "winter"
  };

  let exampleDate = new Date();
  if (!date) return "Unable to determine the time of year!";
  if (date.getMonth !== exampleDate.getMonth) throw new Error();
  else return seasons[date.getMonth()];
};
