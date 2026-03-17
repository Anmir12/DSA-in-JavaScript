//   Pseudo Code
//We Need To Find A Pair Of Values In Which The Sum Of Those Values Evaluated To Be Zero
//We Take An Array Which Have DataType Of Numbers In A Sorted Way
//[-10,-8,-6,-4,-2,3,5,7,8,10]
//We Loop Through Each Value Of The Array (for of)
//We Create A Nested Loop Also For Comparing The Values of uppper Loop to lower loop
// We Check For The Condition if The Sum is Equal To Zero We Return The pair in lower loop

function sumZero(array) {
  for (let value1 of array) {
    for (let value2 of array) {
      if (value1 + value2 === 0) {
        console.log("the sum of pair which equals to zero is", [
          value1,
          value2,
        ]);
      }
    }
  }
}
const result = sumZero([-10, -8, -6, -4, -2, 3, 5, 7, 8, 10]);
console.log(result)


//O(n^2)quadratic Time Complexity