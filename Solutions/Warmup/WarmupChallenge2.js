function test() {
  const steps = 12;
  const path = "DDUUDDUDUUUD";

  function countingValleys(steps, path) {
    let valleyStart = false;
    let height = 0;
    let valleyCount = 0;

    path.split("").forEach((step) => {
      if (step === "D") {
        height--;
      } else if (step === "U") {
        height++;
      }

      if (!valleyStart && height < 0) {
        valleyStart = true;
        valleyCount++;
      }
      if (valleyStart && height === 0) {
        valleyStart = false;
      }
    });
    return valleyCount;
  }

  countingValleys(steps, path);
}

module.exports = { test };
