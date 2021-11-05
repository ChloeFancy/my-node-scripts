module.exports = (promiseList, initialValue) => (Array.isArray(promiseList) ? promiseList : []).reduce((prev, cur) => {
  return prev.then(cur);
}, Promise.resolve(initialValue))