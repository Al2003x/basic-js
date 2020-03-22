module.exports = function repeater(str, options) {
  let sentence = "";
  if (options.hasOwnProperty("repeatTimes")) {
    if (options["repeatTimes"] === undefined)
      sentence += str + options["addition"];
    else {
      for (let i = 1; i <= options["repeatTimes"]; i++) {
        sentence += str;
        if (options.hasOwnProperty("addition")) {
          if (options.hasOwnProperty("additionRepeatTimes")) {
            for (let j = 0; j < options["additionRepeatTimes"]; j++) {
              sentence += options["addition"];
              if (
                options.hasOwnProperty("additionSeparator") &&
                j !== options["additionRepeatTimes"] - 1
              )
                sentence += options["additionSeparator"];
            }
          } else sentence += options["addition"];
        }
        if (options.hasOwnProperty("separator") && i !== options["repeatTimes"])
          sentence += options["separator"];
        else if (i !== options["repeatTimes"]) sentence += "+";
      }
    }
  }
  return sentence;
};
