//for a given array of strings reverse the string in place with O(1) time complexity

//we can use swap technique here and for n length array we can loop till n/2 and replace it

//for example:- (0,n-length-1) ,(1,n.length-2),(2,n.length-3) so it will be likw (i[0], n.length-1-i) ,(i[1], n.length-1-i), (i[2], n.length-1-i)

function ReverseString(str) {
  if (!str.length) {
    return false;
  }
  let length = str.length;
  let temp;
  let halfLen = Math.floor(length / 2);
  for (let i = 0; i < halfLen; i++) {
    temp = str[length - 1 - i];
    str[length - 1 - i] = str[i];
    str[i] = temp;
  }
  return str;
}

const stringArr1 = ["h", "e", "l", "l", "o"];
const stringArr2 = ["A", "n", "m", "i", "r"];

const result1 = ReverseString(stringArr1);
const result2 = ReverseString(stringArr2);

console.log(result1);
console.log(result2);

