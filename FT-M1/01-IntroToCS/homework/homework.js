'use strict';

function BinarioADecimal(num) {
   let sum = 0;
   let array = num.split("").reverse();

   for (let i = 0; i < array.length; i++) {
      sum += array[i] * 2 ** i;
   } return sum;
}

function DecimalABinario(num) {
   return num.toString(2);
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
