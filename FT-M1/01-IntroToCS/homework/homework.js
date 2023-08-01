'use strict';

function BinarioADecimal(num) {
   let sum = 0;
   let array = num.split("").reverse();

   for (let i = 0; i < array.length; i++) {
      sum += array[i] * 2 ** i;
   } return sum;
}

function DecimalABinario(num) {
   let binario = [];
   while (num >= 1) {
      let res = Math.trunc(num % 2)
      num = num / 2
      binario.unshift(res)
   }
   return binario.join("");
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
