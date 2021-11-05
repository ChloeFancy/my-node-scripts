
const execa = require('execa')

module.exports = (...params) => {
  console.log(params.map(p => Array.isArray(p) ? p.join(' ') : p).join(' '));
  return execa(...params);
}