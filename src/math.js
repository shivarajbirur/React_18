const pi = 3.141592653;

function PrecisionTwo() {
  return pi.toPrecision(3);
}

function PrecisionFive() {
  return pi.toPrecision(5);
}

export default pi;
export { PrecisionTwo, PrecisionFive };
