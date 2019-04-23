/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// I: 2 String
// O: 1 String
// C: only can input string
// E: Carrier, make digits to be symmetric
var addBinary = function(a, b) {
  //carrier init = 0;
  //add: i + i + carrier
  var res = [];
  var carrier = 0;
  //find longest length
  var len = a.length < b.length ? b.length: a.length;
  //add zero to the short string, make sure digit symmetric
  var delta = Math.abs(a.length - b.length)
  for (var i=0; i < delta; i++) {
      if (a.length > b.length) {
          b = '0' + b;
      } else if (a.length < b.length){
          a = '0' + a;
      }
  } 
  //iterator through string
  for (var i = len-1; i >= 0; i--) {
      var temp = 0;
      temp = Number(a[i]) + Number(b[i]) + carrier;
      carrier = Math.floor(temp/2);
      res.unshift(temp%2);
  }
  if(carrier) {res.unshift(carrier);}
  
  return res.join('');
};

console.log(addBinary('1','111'));