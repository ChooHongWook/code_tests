const getDivisors = (num) => {
  const divisors = [];
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push([i, num / i]);
    }
  }
  return divisors;
};
function solution(brown, yellow) {
  let result = [];
  let divisors = getDivisors(brown + yellow);
  // console.log("divisors:",divisors);
  for (let i = 0; i < divisors.length; i++) {
    //
    if ((divisors[i][0] - 2) * (divisors[i][1] - 2) === yellow) {
      return [divisors[i][1], divisors[i][0]];
    }
  }
}
