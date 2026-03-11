//We Are Going To Code A Famous Interview Question FizzBuzz
//The Conditions Are We Need To Print Out A List Of Numbers Continously
//Whenever We Call Something It Will Add New Number In Sequnce of 1,2,3 likethis
//But If Any Number Is Divsible of 3 We Need To Printout "Fizz"
//And If Any Number Is Divisble of 5 We Need To printout "Buzz"
//If The Number Is Divisble Of Both 3 And 5 We Need To printout "FizzBuzz"
//But The Numbers Are To Be In Seqeunce Only Change When Above Conditions Met and The Sequence continues if not

let arr = [];
let count = 1;
function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    arr.push("FizzBuzz");
  }
  else if (count % 3 === 0) {
    arr.push("Fizz");
  }
  else if (count % 5 === 0) {
    arr.push("Buzz")
  }
  else {
    arr.push(count);
  }
  count++;
  console.log(arr);
}
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
