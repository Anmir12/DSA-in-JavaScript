//A String Is Said To Anargam if It Satisfies Below Two Conditions
//1.The Length Of First String And Second String Need To Be Equal
//2.The Occurence Of Each Character Should Be Same In Both The Strings
//Given Are The Examples Of String Anargam
//"anmir"="miran"  vaild Anargam
//"shamir"="mirsha" valid Anargam
//"Subhani"="anusbhh" invalid Anargam

// function isAnargam(string1,string2){
// str1=string1.split("").sort().join("")
// str2=string2.split("").sort().join("")
// if(str1==str2){
//     return true;
// }
// else{
//     return false;
// }
// }
// let check1 =isAnargam("anmir","miran")
// let check2 =isAnargam("shamir","mirsha")
// let check3 =isAnargam("subhani","usbhnii")
// console.log(check1)
// console.log(check2)
// console.log(check3)

//but in Interviews We Maybe Need To Write The Logic Without Using Inbuilt JS Methods

function isAnargam(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  let characters = {};

  for (letter of string1) {
    characters[letter] = (characters[letter] || 0) + 1;
  }

  for (word of string2) {
    if (!characters[word]) {
      return false;
    }
    characters[word] -= 1;
  }
  return true;
}

let check1 = isAnargam("anmeer", "ramene");
let check2 = isAnargam("shamir", "mirsha");
let check3 = isAnargam("subhani", "usbhnii");
console.log(check1);
console.log(check2);
console.log(check3);