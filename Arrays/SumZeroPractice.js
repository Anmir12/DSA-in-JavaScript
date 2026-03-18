//we have to check the Sum Of Two Numbers In An Array To Be 0
//[-8,-6-,-4,-2,1,3,4,7,9]
//the upper One Is A Sorted Array
//we use A Function Which Takes An Array As Parameter
//we loop Through Each Value Of Array in First Loop
//And In Next Loop We loop Through The First Loop of numbers + 1 value
//we check for the condition array[numbers]+array[items]===0 than we return True Else False

// function sumZero(array){
//     for(i=0;i<array.length;i++){
//         // console.log(array[i])

//     for(j=i+1;j<array.length;j++){
//         if(array[i]+array[j]===0){
//             return [array[i],array[j]]
//         }
//         // else{
//         //     console.log("there Are No Possible Values Which Sum equals To Zero")
//         // }
//     }
// }
// }
// let sumArray =[-8,-6,-4,-2,1,3,4,7,9]
// const result=sumZero(sumArray)
// console.log(result)

//The Above Method Has A Time Complexity Of O(n^2) Quadriatic But We Can Convert It To O(n) Linear

//Same,We Will Take An Array As Parameter
//[-8,-6-,-4,-2,1,3,4,7,9]
//We Take Left Of Array As Zero(array Index Starts With Zero) And Right Of Array As(array.length-1) The Last Value Of Array Will Be The Total Length Of -1
//We Store The Sum of Array[left]+array[right]===0 In A Sum Variable
//we Loop Through Each Value Of Array Using A Loop
//We Check For The Conditions If The Sum>0 We Apply Right--
//We Check For The Conditions If The Sum<0 We Apply left++
//if The Sum=0 Than We Return The Sum

function mySumZero(array) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    sum = array[left] + array[right];
    if (sum === 0) {
      return [array[left], array[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
let sumArray = [-8, -4, -2, 1, 2, 3, 4, 6, 7, 9];
const result = mySumZero(sumArray);
console.log(result);
