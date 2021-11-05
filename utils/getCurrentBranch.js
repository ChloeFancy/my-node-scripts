const execa = require('./execaWithConsole')

// git symbolic-ref --short -q HEAD
/**
 * 获取当前分支名称
 * @returns Promise<string>
 */
module.exports = () => execa('git', ['symbolic-ref', '--short', '-q', 'HEAD']).then(({ stdout }) => stdout);