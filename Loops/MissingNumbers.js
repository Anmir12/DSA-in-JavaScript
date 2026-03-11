//consider an array of [0,1], here missing number is 2 and another array of [0,1,2,4] here missing numbers is 3 
// n=2 and n=4 in both arrays means they are in range of [0,2] and [0,4] respectively
// sum of all the numbers in second array  => 0 + 1 + 2 + 4 = 7 , total number of elements in the array =4 so 7-4 =3;

const missingNumbers = (num) =>{
    if(num<0){
        return num;
    }
    return num.length * (num.length + 1) / 2 - num.reduce((acc,curr)=> acc + curr);
 
}

console.log(missingNumbers([0,1,2,4]));
console.log(missingNumbers([0,1]));


