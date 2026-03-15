// a fibanocci is a number which is 0,1 is constant => 0 + 1 => 1, 1+1 => 2 , 1+2 => 3, 2+3 = 5 ...........(N-1)+(N)

let fib = function(n) {
    if(n < 2){
        return n;
    }
   let prev = 0 ,current = 1, next;
  for(let i=2; i<=n; i++){
    next = prev + current;
    prev = current;
    current = next;
  }
  return next;
};

// Fibonacci Sequence: 0 1 1 2 3 5 8...
// console.log(fib(5)); // 5
console.log(fib(10)); // 55































// function swap(a,b){

//     a = a + b;

//     b = a - b;

//     a = a - b ;

//     return [a,b];
// }

// console.log(swap(25,34));
