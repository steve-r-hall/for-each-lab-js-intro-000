function iterativeLog(array) {
  array.forEach(logentry);
}

function logentry(index,entry,array) {
  console.log(`${index}: ${entry}`);
  return
}

function iterate(callback) {
  var temp = ["A", "B", "C", "D", "E"]
  temp.forEach(callback);
  return temp
}

function doToArray(array, callback) {
  array.forEach(callback)
}
