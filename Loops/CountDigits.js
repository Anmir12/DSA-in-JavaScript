//given a integer 57896  the result would be total number of numbers count ex:- 57896 => 5, 7654393 => 7

//57896 / 10 => quoitient =5789, reaminder =6  => similarly q=578,r=9 => q=57,r=8 => q=5, r=7

//sum all the reaminders to a result 

let countDigit = 57896;

const countDigits = (num) =>{
    let count = 0;

    while(num>0){
        num = Math.floor(num / 10); // 57896 = 57896/10 =>5789/10 =>578/10 =>57/10 =>5/10 => 0
        
        count++;
    }

    return count;
}

console.log(countDigits(7654393));



























