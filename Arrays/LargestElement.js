//given an array of integers [2,7,3,5,9,13,1] find largest element in it and return it

//solution should handle negative integers and in case of empty array should return -1

function largestElement(arr){
  let largest =-Infinity;
  if(!arr.length){
    return -1;
  }
  for(let i=0; i<arr.length; i++){
    
    if (arr[i] > largest){

        largest = arr[i];
    }
  }

  return largest;

}

const array = [2,7,3,5,-9,-13,1];

const result =largestElement(array);

console.log(result)