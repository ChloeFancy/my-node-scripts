const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

module.exports = () => {
  return yargs(hideBin(process.argv)).argv;
}