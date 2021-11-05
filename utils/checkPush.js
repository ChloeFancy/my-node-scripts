
const execa = require('./execaWithConsole')

/**
 * 检查当前仓库/暂存区的内容是否推送到远端
 * @returns 
 */
module.exports = () => {
  return execa('git', ['status']).then(({ stdout }) => {
    return stdout.includes('(use') ? stdout : '';
  })
}