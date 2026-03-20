//given an array of integers [2,7,3,5,9,13,1] find second largest element in it and return it

//solution should handle negative integers and in case of empty array should return -1


function secondLargest(arr){
  let largest =-Infinity;
  let secondLargest =-Infinity;

  for(let i=0; i<arr.length;i++){

    if(arr[i] > largest){
        secondLargest = largest;
        largest = arr[i]
    }
    if(arr[i] >secondLargest && arr[i] < largest){
        secondLargest = arr[i];
    }
  }

  return secondLargest;
}

const array = [2,7,3,5,9,13,12,4,6,15];

const result = secondLargest(array);
console.log(result)