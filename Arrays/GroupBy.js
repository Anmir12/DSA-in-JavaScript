
const arr =  [ {"id":"1"}, {"id":"1"},{"id":"2"}];
const GroupByUniqueKeys = (nums) =>{
      
     const unique = nums.reduce((groupped,item)=>{
        let key = nums[item];
       
        console.log(key);
        // if(!groupped[key]){
        //     key = [];
        // }

    },{});
    return unique;
}


console.log(GroupByUniqueKeys(arr))