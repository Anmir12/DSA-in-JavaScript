/* 
-----*       // for every row there is n-row spaces => 6-1 =5 => spaces =n-row
----**      // for every row there is equal number of stars => 1st row 1 star,2nd row 2star stars = row
---***
--****
-*****
******

*/

function Pattern3 (n){
  for(let row = 1; row <=n ; row++){
    let str = '';
    let spaces = n-row;
    for(let col = 1; col <=spaces; col++){
        str+= " ";
    }
    let stars = row;
    for(let col = 1; col<=stars ; col++){
        str+="*"
    }
    console.log(str);
  }
}

Pattern3(6);