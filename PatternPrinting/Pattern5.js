/*

*****
****
***
**
*

*/

function Pattern5(n) {
  for (let row = 1; row <= n; row++) {
    let str = "";
    let stars = n-row + 1
    for (let col = 1; col <= stars; col++) {
      str += "*";
    }
    console.log(str);
  }
}

Pattern5(5);