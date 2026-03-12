/* 
----*     for every row there is star which is odd => stars = 2n -1 
---***
--*****
-*******
*********

*/

function Pattern4(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    let spaces = n - row;
    for (let col = 1; col <= spaces; col++) {
      str += " ";
    }
    let stars = 2 * row - 1;
    for (let col = 1; col <= stars; col++) {
      str += "*";
    }

    console.log(str);
  }
}

Pattern4(5);