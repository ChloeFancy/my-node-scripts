

const execaWithConsole = require('./execaWithConsole')
const sequential = require('./sequentialPromise')
//  git diff HEAD...origin/master

/**
 * 检测当前分支是否落后于指定分支
 * @param {*} targetBranch 
 * @returns 
 */
module.exports = (targetBranch = 'master') => sequential(execaWithConsole('git', ['fetch']), execaWithConsole('git', ['diff', `HEAD...origin/${targetBranch}`])).then(({ stdout }) => stdout);