class VigenereCipheringMachine {
  constructor(rev) {
    this.rev = rev;
  }

  checkErr(str, key) {
    if (!str || !key) throw new Error();
  }

  createAlphabet() {
    let alph = [];

    for (let i = 65; i < 91; i++) {
      alph.push(String.fromCharCode(i));
    }
    return alph;
  }

  encrypt(str, key) {
    this.checkErr(str, key);

    let ind;
    let result = "";
    let alphabet = this.createAlphabet();
    str = str.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < str.length; i++, j++) {
      if (alphabet.includes(str[i])) {
        ind =
          (alphabet.indexOf(key.charAt(j % key.length)) +
            alphabet.indexOf(str[i])) %
          alphabet.length;
        result += alphabet[ind];
      } else {
        j--;
        result += str[i];
      }
    }
    return this.rev === false
      ? result
          .split("")
          .reverse()
          .join("")
      : result;
  }

  decrypt(str, key) {
    this.checkErr(str, key);

    let ind;
    let result = "";
    let alphabet = this.createAlphabet();
    str = str.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0, j = 0; i < str.length; i++, j++) {
      if (alphabet.includes(str[i])) {
        ind =
          (alphabet.length +
            alphabet.indexOf(str[i]) -
            alphabet.indexOf(key.charAt(j % key.length))) %
          alphabet.length;
        result += alphabet[ind];
      } else {
        j--;
        result += str[i];
      }
    }
    return this.rev === false
      ? result
          .split("")
          .reverse()
          .join("")
      : result;
  }
}

module.exports = VigenereCipheringMachine;
