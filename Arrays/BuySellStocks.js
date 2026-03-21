//for a given array [7,1,3,5,6,4] we need to find the max profit if we buy on prev date and sell on future date

// you can not sell stocks purchase today and sold in prev date means for a particular date next day or fututre days only you can sell the stocks

// if there is no possibilty of a profit for any day then return 0 ex:- [9,7,5,4,2,1], here no matter the day which you bought there is no profit

function maxProfitToSellStocks(arr) {
  let minVal = arr[0];
  let maxProfit = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minVal) {
      minVal = arr[i];
    }
    if (arr[i] - minVal > maxProfit) {
      maxProfit = arr[i] - minVal;
    }
  }
  return maxProfit;
}

const stocksArray = [7, 1, 3, 5, 6, 4, 8, 2];

const result = maxProfitToSellStocks(stocksArray);

console.log(result);
