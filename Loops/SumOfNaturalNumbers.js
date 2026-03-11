/* 
   natural numbers: all postive numbers > 1
    
*/

function sumOfAllNaturalNumbers(n){
       let sum = 0;
    for(let i = 1 ; i<=n ; i++ ){
       sum = sum + i
    }

    return sum;
}

console.log(sumOfAllNaturalNumbers(10));




