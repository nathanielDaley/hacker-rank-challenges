function test() {
  const stringToRepeat = "aba";
  const numCharsToConsider = 10;

  function repeatedString(s, n) {
    let aCount = 0;
    let aNum = 0;
    const repeats = Math.floor(n / s.length);
    const leftover = n % s.length;
    let leftoverString = s.slice(0, leftover);

    for (let i = 0; i < s.length; i++) {
      if (s[i] === "a") {
        aNum++;
      }
    }

    if (leftoverString.length > 0) {
      for (let i = 0; i < leftoverString.length; i++) {
        if (leftoverString[i] === "a") {
          aCount++;
        }
      }
    }
    aCount += aNum * repeats;

    return aCount;
  }

  console.log(repeatedString(stringToRepeat, numCharsToConsider));
}

module.exports = { test };
