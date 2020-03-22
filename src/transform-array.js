module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  else {
    let i = 0;
    let newArr = [];
    while (arr.length >= i) {
      switch (arr[i]) {
        case "--discard-next":
          i = i + 2;
          break;
        case "--discard-prev":
          newArr.pop();
          i++;
          break;
        case "--double-next":
          newArr.push(arr[i + 1]);
          i++;
          break;
        case "--double-prev":
          newArr.push(arr[i - 1]);
          i++;
          break;
        default:
          newArr.push(arr[i]);
          i++;
          break;
      }
    }
    return newArr.filter(el => el !== undefined);
  }
};
