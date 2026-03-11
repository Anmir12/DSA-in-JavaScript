// given a number 345678 return the sum of all the integers added into a number  ex:- 345678 => 3+4+5+6+7+8 => 33

// 345678 / 10 => q=34567, r=8

const sumOfNumbers = (num) => {
  let sum = 0;
  do {
     let remainder = Math.floor(num % 10);  // reaminder => 8,7,6,5,4,3
      num = Math.floor(num / 10);   //num => 345678/10 => 34567 =>3456 =>345 => 34 => 3 =>0
      sum = sum + remainder;   // 0+8+7=6+5+4+3 = 33
 
  } while (num > 0);

  return sum;
};

console.log(sumOfNumbers(2597654103525454));




