function sumTwoSmallestNums(arr) {
  firstMin = Math.min.apply(null, arr)
  arr.splice(arr.indexOf(minimum), 1)
  secMin = Math.min.apply(null, arr)

 return firstMin + secMin;

 }
  module.exports =sumTwoSmallestNums