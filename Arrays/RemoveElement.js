//given an array of [3,2,2,3] and val=3 we need to remove the element in array if it matches with val and return the array
//again ,we will use the two pointer technique one will iterate through the array one will to modify the array in place


function removeElement (arr,val){
 if(arr.length === 0){
    return 0;
 }

 let x= 0;

 for(let i=0; i<arr.length; i++){

    if(arr[i] !== val){
        arr[x] = arr[i]
        x=x+1;
      
    }
 }
 return x;
}
const array = [3,2,1,5,3,4,8,3]
const result = removeElement(array,3);

console.log(result)