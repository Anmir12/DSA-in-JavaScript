//for a given array [0, 0, 1, 1, 1, 2, 2, 3, 3 ,4] of integers in non-decreasing order remove the duplicates in-place and return the count of elements

//the final array will be like [0,1,2,3,4,_,_,] like this. so we can use two pointer technique here

//one pointer will iterate through all the elements in the array and second one will be used to modify the elements in place

function removeDuplicates(array){
    if(arr.length === 0){
        return 0;
    }
  let x=0;
  for(let i=0; i<array.length; i++){
    if(array[i] !== array[x]){
        x = x + 1;
        array[x] =array[i];
      
    }
}
return x + 1;
}

const arr = [0,0,1,1,1,2,2,3,3,4]
const result =removeDuplicates(arr);

console.log(result)