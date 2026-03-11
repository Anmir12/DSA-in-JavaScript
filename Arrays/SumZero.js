//   Pseudo Code
//We Need To Find A Pair Of Values In Which The Sum Of Those Values Evaluated To Be Zero
//We Take An Array Which Have DataType Of Numbers In A Sorted Way
//[-10,-8,-6,-4,-2,3,5,7,8,10]
//We Loop Through Each Value Of The Array (for of)
//We Create A Nested Loop Also For Comparing The Values of uppper Loop to lower loop
// We Check For The Condition if The Sum is Equal To Zero We Return The pair in lower loop

function sumZero(array){
    for(number of array){
        // console.log(number)
        for(let j=number+1;j<array.length;j++){
            if(number + array[j] ===0){
                console.log("the Pair Of Sumzeros Are: ",[number,array[j]])
                // return [number,array[j]]
            }
        }

    }
}
const result=sumZero([-10,-8,-6,-4,-2,3,5,7,8,10])
console.log(result)


//O(n^2)quadratic Time Complexity