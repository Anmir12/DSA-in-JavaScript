//an integer is said to be palindrome if order of reversal of the number is equal original number 

// example:- 786687, here reversing the number we get 786687  and 678 <=> 876 which is not a palindrome number

// loop through the number and divide the number by 10 => 786687/10 => q=78668,reaminder=7 => store the remainder in a variable =>786687

//check if the given number and reversed number is equal , if is it equal then its a palindrome return true else its not a palindrome return false


const isPalindrome = (num) =>{
    let reversed = 0, copyNum = num;
    while(copyNum>0){
        let remainder = copyNum % 10;
         reversed =  reversed*10 + remainder;
         copyNum = Math.floor(copyNum/ 10);
    }
    
    return num === reversed;

}

console.log(isPalindrome(786687));

