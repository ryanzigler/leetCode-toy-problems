/* eslint-disable no-unused-vars */
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kthFactor = (n, k) => {
  const factors = [1];
  for (let i = 2; i <= n && factors.length < k; i += 1) {
    if (n % i === 0) {
      factors.push(i);
    }
  }
  return factors[k - 1] || -1;
};
