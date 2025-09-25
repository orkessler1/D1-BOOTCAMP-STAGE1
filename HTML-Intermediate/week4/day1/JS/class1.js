const myArray = [2, 3, 4, 5, 6]; 

//1st example with arrow function
myArray.forEach((number, index) => { 
    console.log("number: ", number) // logs each element of the array
    console.log("index: ", index) // logs each index of the array
}); 

//2nd example with arrow function
myArray.forEach((number, i, arr) => { 
    arr[i] = arr[i] * 2; 
}); 

console.log(myArray)
//output : [ 4, 6, 8, 10, 12 ]

//2nd example with function expression
myArray.forEach(function(number, i, arr) { 
    arr[i] = number * 2; 
}); 

console.log(myArray)
//output : [ 4, 6, 8, 10, 12 ]



// קובץ נקי לבדיקה
const numbersone = [10, 11, 12, 15, 20];

numbersone.forEach((number, i) => {
  if (i % 2 === 1) {          // אינדקס אי-זוגי: 1, 3, ...
    console.log("number:", number);
  }
});


//1st example
const myArr = [1, 2, 3, 4, 5, 6, 7, 8];
myArr.some((value)=> { return (value%2 == 0); });
//output : true 
//because there is at least one even number in the array

//2nd example
myArr.some((value)=> { return (value < 0); });
//output: false 
//because there is no negative number in the array

//If the arrow function is only returning a value you don't need the return keyword
//If the arrow function takes only one parameter you can omit the parentheses
myArr.some(value => value < 0 );
//output: false 
//because there is no negative number in the array

//3rd example
function isEven(x) {
  console.log(x) 
  return (x % 2 == 0);
}

myArr.some((value) => isEven(value));
//output : 1 2 true
//stops iterating as soon as an even number is found 


const words = ["wow","hey","bye"];
const hasH = words.some(w => w[0] === 'h');
console.log(hasH);




const wordss = ["hello","hey","hola"];
const alll = wordss.every(word => word[0] === "h");
console.log(alll);