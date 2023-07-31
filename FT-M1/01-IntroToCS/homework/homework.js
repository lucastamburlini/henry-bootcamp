'use strict';

function BinarioADecimal(num) {
   let numeros = 0;
   let numArray = num.split("").reverse();

   for (let i = 0; i < num.length; i++) {
      numeros = numeros + numArray[i] * 2 ** i;
   } return numeros;
}

function DecimalABinario(num) {
   return num.toString(2);
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
