function sumMix(arr) {
   let maxium = arr.reduce((total, num) => Number(total) + Number(num))
   return maxium;
 }

  module.exports = sumMix