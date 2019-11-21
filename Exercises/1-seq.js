'use strict';

// const seq = f => g => x => {
//   f = 7; g = 2; const f1 = x => x * g; const f2 = x => f1(x) + f;
//   return f2(x);
// };
const seq = f => g => (typeof(g) === 'function' ? seq(a => f(g(a))) : f(g));

module.exports = { seq };
