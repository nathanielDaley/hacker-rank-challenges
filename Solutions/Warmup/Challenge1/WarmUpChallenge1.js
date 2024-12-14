function test() {
  const n = 7;
  const ar = [1, 2, 1, 2, 1, 3, 2];

  function sockMerchant(n, ar) {
    let colors = [...new Set(ar)];
    const colorsCounts = {};
    let count = 0;

    ar.forEach((color) => {
      colorsCounts[color] = colorsCounts[color] ? colorsCounts[color] + 1 : 1;
    });

    colors.forEach((color) => {
      count += Math.floor(colorsCounts[color] / 2);
    });

    return count;
  }

  console.log(sockMerchant(n, ar));
}

module.exports = { test };
