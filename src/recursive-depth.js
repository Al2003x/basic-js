module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (Array.isArray(arr)) {
      return (
        arr.reduce(
          (max, current) => Math.max(this.calculateDepth(current), max),
          0
        ) + 1
      );
    } else return 0;
  }
};
