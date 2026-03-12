/*
 ****
 ****
 ****
 ****
 ****
 */

 function Pattern1(number) {
   for (let row = 0; row < number; row++) {
     let str = "";
     for (let col = 0; col < number; col++) {
       str += "*";
     }
     console.log(str);
   }
 }

 Pattern1(3);
 Pattern1(6);

