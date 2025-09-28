function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(`${num} is greater than 10`);
    } else {
      reject(`${num} is less than or equal to 10`);
    }
  });
}

const success = new Promise ((resolve, reject) => {
    setTimeout (() => {
        resolve("success");
    }, 4000);
});

success.then ((good) => {
    console.log(good);
}
)




const promisee = Promise.resolve(3);
promisee.then(getin => {
    console.log(getin);
});

const rejectt = Promise.reject("boo")
rejectt.catch(setin => {
    console.log(setin);
});


