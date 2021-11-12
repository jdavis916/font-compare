function decodePass( passArr, bin ){
  //solution 1: 4 loops
 var binNums = bin.split(' '), convertedBin = binNums.map((i)=> String.fromCharCode(parseInt(i,2))).join('');
 return passArr.includes(convertedBin) ? convertedBin : false;

}
function decodePass2( passArr, bin ){
  //solution 2: 5 loops (fastest)
  var binNums = bin.split(' ');
  for(let i = 0; i < binNums.length; i++){
    binNums[i] = String.fromCharCode(parseInt(binNums[i], 2));
  }
  return passArr.includes(binNums.join('')) ? binNums.join('') : false;

}
function decodePass3( passArr, bin ){
  //solution 3: 3 loops (slowest)
  var len = bin.length;
  var reggy = bin.match(/\b\d+/g);
  var finalStr = '';
  for(let i = 0; i < reggy.length; i++){
    finalStr += String.fromCharCode(parseInt(reggy[i], 2));
  }
  return passArr.includes(finalStr) ? finalStr : false;
}

function decodePass4( passArr, bin ){
  var pb = bin.split(" ").map((el)=>String.fromCharCode(parseInt(el, 2))).join("");
  return (passArr.includes(pb))? pb: false;
}
function decodePass5( passArr, bin ){
  var pb = bin.split(" ").map((el)=>String.fromCharCode(String.fromCharCode(`0b${el}`))).join("");
  return (passArr.includes(pb))? pb: false;
}

function decodePass6( passArr, bin ){
  var pb = bin.split(" ");
  var len = pb.length;
  var arr = [];
  for(i = 0; i < len;i++) {
    arr.push(String.fromCharCode(parseInt(pb[i],2)));
  }
  pb = arr.join('');
  return (passArr.includes(pb))? pb: false;
}

var passArr = ['password123', 'admin', 'admin1'];
var bin = '01110000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00110001 00110010 00110011';
var ct = 100000;
console.time();

for(let i = 0; i < ct; i++){
  decodePass(passArr, bin);
}
console.timeEnd();
console.log('------first----');

console.time();

for(let i = 0; i < ct; i++){
  decodePass2(passArr, bin);
}
console.timeEnd();
console.log('------second----');

console.time();

for(let i = 0; i < ct; i++){
  decodePass3(passArr, bin);
}
console.timeEnd();
console.log('------third----');

console.time();

for(let i = 0; i < ct; i++){
  decodePass4(passArr, bin);
}
console.timeEnd();
console.log('------fourth----');

console.time();

for(let i = 0; i < ct; i++){
  decodePass5(passArr, bin);
}
console.timeEnd();
console.log('------fifth----');

console.time();

for(let i = 0; i < ct; i++){
  decodePass6(passArr, bin);
}
console.timeEnd();
console.log('------sixth----');