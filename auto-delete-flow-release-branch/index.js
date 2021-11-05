const execa = require('execa');
const moment = require('moment');


/**
 * 自动删除远端的某些分支
 */
execa('git', ['fetch']).then(() => execa('git', ['branch', '-r'])).then((res) => {
  const reg = /^origin\/release\/(\d+)-?/;
  const today = moment().format('YYYYMMDD')
  const stale = res.stdout.split(/\s/).filter((branchName) => {
    const [_, date] = reg.exec(branchName) || [];
    return date && (today - date > -1);
  });
  Promise.all(stale.map(branchName => {
    const [_,trimmedName] = /^origin\/(\S+)$/.exec(branchName);
    return Promise.all([execa('git', ['push', 'origin', trimmedName, '-d']), execa('git', ['branch',trimmedName, '-D'])]).then(() => ({branchName: trimmedName, success: true}), (e) => ({branchName: trimmedName, success: false, error: e}))
  })).then((failList) => {
    console.log('result', JSON.stringify(failList, null, 4));
  })
}).catch(e => {
  console.log('error: ', e)
})
