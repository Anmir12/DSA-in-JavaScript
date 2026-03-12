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
    let stars = n - row + 1;
    for (let j = 1; j <= stars; j++) {
      str += "*";
    }

    console.log(str);
  }
}

Pattern5(6);