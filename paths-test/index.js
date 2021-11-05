const path = require('path')

console.log('process.cwd(): ',process.cwd(), '__dirname: ', __dirname); // 即：输入node xxxx.js 的位置
process.chdir('/Users'); // 变更node执行目录
console.log('process.cwd(): ',process.cwd(), '__dirname: ', __dirname); // 即：输入node xxxx.js 的位置

console.log('path.resolve(__dirname, \'../\'): ', path.resolve(__dirname, '../')) //  /Users/baicizhan/WebstormProjects/my-scripts
console.log('path.join(__dirname, \'../\'): ', path.join(__dirname, '../')) // /Users/baicizhan/WebstormProjects/my-scripts/
console.log('__filename: ', __filename) //  /Users/baicizhan/WebstormProjects/my-scripts/paths-test/index.js

// cwd 会变
// __dirname 不会变
// path.resolve(__dirname, '../')  // /Users/baicizhan/WebstormProjects/my-scripts 从__dirname 往上一层级

