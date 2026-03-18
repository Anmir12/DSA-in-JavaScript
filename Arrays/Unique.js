//it takes an array set Of Repeating Numbers and Returns The numbers Which Are Unique
//i  j
//[2,2,3,3,4,4,5,6,7,7,8]

function unique(array) {
  let i = 0;

  if (array.length > 0) {
    for (j = 1; j < array.length; j++) {
      if (array[i] !== array[j]) {
        i = i + 1;
      }
      array[i] = array[j];
    }

    return i + 1;
  } else {
    return new Error(" Array is Empty");
  }
}
let arr = [1, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9, 9];
const uniqueVal = unique(arr);
console.log(uniqueVal);
