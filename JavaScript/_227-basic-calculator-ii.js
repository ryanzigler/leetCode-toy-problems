/* eslint-disable no-unused-vars */
// @ts-nocheck
/**
 * @param {s} s
 * @return {number}
 */
const calculate = (s) => {
  if (s.length === 0 || s == null) {
    return null;
  }
  // remove spaces from s
  const str = s.replace(/\s+/g, '');
  const stack = [];
  let num = 0;
  let operator = '+';

  // iterate over s
  for (let i = 0; i < str.length; i += 1) {
    const char = str[i];

    if (/\d/.test(char)) {
      num = num * 10 + Number(char);
    }

    if (/\D/.test(char) || i === str.length - 1) {
      if (operator === '-') {
        stack.push(-num);
      } else if (operator === '+') {
        stack.push(num);
      } else if (operator === '*') {
        stack.push(stack.pop() * num);
      } else if (operator === '/') {
        stack.push(Math.trunc(stack.pop() / num));
      }

      operator = str[i];
      num = 0;
    }
  }
  return stack.reduce((a, b) => {
    return a + b;
  });
};
