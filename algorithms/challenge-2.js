function filterArray(arr) {
 return arr.filter(arr => typeof arr !== "string");
}

module.exports = filterArray