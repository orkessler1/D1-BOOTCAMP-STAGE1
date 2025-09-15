const stock = { 
  banana: 6, 
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1
};

const prices = {    
  banana: 4, 
  apple: 2, 
  pear: 1,
  orange: 1.5,
  blueberry: 10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let sum = 0;
  for (const item of shoppingList) {
    if (item in stock && stock[item] > 0 && item in prices) {
      sum += prices[item];
      // אם רוצים גם להפחית מהמלאי: stock[item]--;
    }
  }
  return sum;
}

console.log(myBill()); // 5.5
