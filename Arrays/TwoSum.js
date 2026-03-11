const twoSum =(nums,target) =>{
    if(!nums.length && target<0){
        return false;
    }
    for(let i=0; i<nums.length ; i++){
        for(let j= i+1 ;j<nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
    return -1;
}

console.log(twoSum([2,3,7,9],5));