function test() {
  const clouds = [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0];

  function jumpingOnClouds(c) {
    let steps = 0;
    let cumulousCount = 0;

    c.forEach((cloud) => {
      if (cloud === 0) {
        cumulousCount++;
      }
      if (cloud === 1) {
        steps += Math.floor(cumulousCount / 2) + 1;
        cumulousCount = 0;
      }
    });
    if (cumulousCount > 0) {
      steps += Math.floor(cumulousCount / 2);
    }

    return steps;
  }

  console.log(jumpingOnClouds(clouds));
}

module.exports = { test };
