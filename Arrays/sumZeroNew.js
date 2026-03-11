//......... Pseudo Code..........//
//We Saw Earlier that The Time Complexity For Solving The Problem Is Quadratic
//We Can Convert It To Linear O(n)
//same We Take An Array As A Paramater In Function And We Pass An Array While Calling it
//[-10,-8,-6,-4,-2,3,4,7,9,11]
//We Take Left Value Is Zero(Index Of First Element in always Starts At Zero)
//We take The Right Value As array.length-1(The Last Value Of An Array Will Be The The total Length -1 because length Starts From One)
//To Convert An Quadratic Time Complexity To Linear We Need To Reduce The Iteratiorns
//Like Using A Loop And A Nested Loop Inside It To Check Each Value of The Outer Loop Takes
//"N" Inputs Take "N*N" Iterations  => So,We Need To Reduce The Iterations To "N"
//To Do That We Loop Through A Single Loop For All Inputs And Increase The Conditions

//............... Code Solution................//

function sumZeroImproved(array){
    let left =0;
    let right=array.length-1;
    while(left<right){
        sum=array[left]+array[right];
       if(sum===0){
        return [array[left],array[right]];
    }
    else if(sum>0){
        right--;    
        }
    else {
      left++;
    }
  }
}

const result = sumZeroImproved([-10,-8,-6,-4,-2,3,4,7,9,11]);
console.log(result)


//Now,The Time Complexity Reduced From O(n^2) to O(n)