var fs = require('fs');
const paths = require('path')
var PATH = paths.resolve(process.cwd(), ''); // memo: 1. 目录

console.log('PATH', PATH)

// //  遍历目录得到文件信息
function walk(path, callback) {
  var files = fs.readdirSync(path);

  files.forEach(function(file){
    if (fs.statSync(path + '/' + file).isFile()) {
      callback(path, file);
    } else {
      walk(path + '/' + file, callback)
    }
  });
}

// 修改文件名称
function rename (oldPath, newPath) {
  fs.rename(oldPath, newPath, function(err) {
    if (err) {
      throw err;
    }
  });
}

// 运行
walk(PATH, function (path, fileName) {
  const newName = getNewName(fileName)

  var oldPath = path + '/' + fileName, // 源文件路径
    newPath = path + '/'+ newName // memo: 2. 新路径

  rename(oldPath, newPath);
});

function getNewName(file) {
  return file.replace(/ /g, '').replace(/([\da-zA-Z\-]+)([^\d^a-z^A-Z^\-][^\.]+)(\.\S+)$/, (...params) => `${params[1]}${params[3]}`);
}
