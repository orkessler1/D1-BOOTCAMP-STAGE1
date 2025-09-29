let goodGrades = 83;

let endSemester = new Promise(function (resolve, reject) {
    if (goodGrades > 90) {
        resolve("Computer");
    } else if (goodGrades > 80 && goodGrades <= 89) {
        resolve("Phone");
    } else {
        reject("I won't get the gift");
    }
});


endSemester.then(function (value) {
    console.log("I got an amazing gift : A ", value);
});

endSemester.catch(function (value) {
    console.log("Booo", value);
});

endSemester.finally(function () {
    console.log(`No matter if I get a gift or not, 
                I want to have good grades`);
});

console.log(endSemester)




let bankAmount = 1000
let expense = 500

let bankPromise = new Promise((resolve, reject) => {
    if (expense<bankAmount) {
        resolve(expense);
    } else {
        reject("Rejected by the Bank");
    }
});

//1st "then"
bankPromise.then((result) => {
    //result is the argument passed in the resolve function
    console.log(`The expense is ${result} dollars`);
    return result * 1.17;
//2nd "then"
}).then((resultTwo) => {
    //resultTwo is the expense including taxes
    console.log(`The expense included taxes is ${resultTwo} dollars`);
    bankAmount -= resultTwo;
    console.log(`I have ${bankAmount} dollars left in the bank`);
    return bankAmount;
}).catch((error) => {
    console.log(`We have a problem : ${error}`)
});


const p = new Promise((resolve, reject) => {
    if(true){
      resolve('hello world');
    }
    else{
      reject('error');
    }
});

p.then((result) => {
    // console.log(result);
    return result + "!";
})
.then((result1) => {
   return result1 + "?";
})
.then(result2=>{
  return result2 + "#";
})
.then(result3 => {
  console.log(result3);
})
.catch(err => {

});




const flip = () => {
    let x = (Math.floor(Math.random() * 2) == 0);
    if (x) {
        return "heads";
    } else {
        return "tails";
    }
}

const flipACoin = new Promise((resolve, reject) => {
  const flipResult = flip(); //let's say flip() takes a few seconds

  if(flipResult) {
    resolve(flipResult);
  } else {
    reject();
  }
});
//
//...
//do other things
//...
//
console.log("Wait, did I flip the coin?");
//
flipACoin.then((flipResult) => {
  console.log("Oh I did!");
  // console.log(flipResult);
});
//
console.log("Double checking...");
// //
flipACoin.then((flipResult) => {
  console.log("Okay I definitely did!");
  // console.log(flipResult);
});


