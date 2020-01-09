'use strict';

// const array = x => ({
//   function() {
//     const a = [];
//     return a;
//   },
//   push(a) {
//     console.log(a.push);
//     a.push(x);
//     return this;
//   }
// });

const array = () => {
  const arr = [];
  const fn = i => arr[i];
  fn.push = x => arr.push(x);
  fn.pop = () => arr.pop();
  return fn;
};

module.exports = { array };
