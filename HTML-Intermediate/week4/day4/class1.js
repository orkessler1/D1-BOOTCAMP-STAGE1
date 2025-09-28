"use strict";

/* ===== Section 1: Sync version (renamed with suffix 1) ===== */
const makeBurger1 = () => {
  const meatType1 = getMeat1();
  const bunsType1 = getBuns1();
  const burger1 = putMeatBetwenBuns1(bunsType1, meatType1);
  return burger1;
};

function getMeat1() {
  console.log("getting the beef from the butcher");
  return "beef";
}

function getBuns1() {
  console.log("getting the buns from the bakery");
  return "whole grain";
}

function putMeatBetwenBuns1(bunsType1, meatType1) {
  console.log(`creating the ${meatType1} burger with ${bunsType1} buns`);
  return "Delicious Burger";
}

const burger1 = makeBurger1();
console.log(burger1);

/* ===== Section 2: Callbacks version (renamed with suffix 2) ===== */
function getMeat2(callback2) {
  console.log("walking to the butcher...");
  setTimeout(() => {
    console.log("getting the beef from the butcher");
    callback2("beef");
  }, 2000);
}

function getBuns2(callback2) {
  console.log("getting the buns from the bakery");
  callback2("whole grains");
}

function putMeatBetwenBuns2(bunsType2, meatType2, callback2) {
  console.log("preparing the burger...");
  callback2(`The ${meatType2} burger with ${bunsType2} buns is created`);
}

const makeBurger2 = () => {
  getMeat2((meatType2) => {
    getBuns2((bunsType2) => {
      putMeatBetwenBuns2(bunsType2, meatType2, (finalBurger2) => {
        console.log(finalBurger2);
      });
    });
  });
};

const burger2 = makeBurger2();

/* ===== Section 3: Callbacks version duplicate (renamed with suffix 3) ===== */
function getMeat3(callback3) {
  console.log("walking to the butcher...");
  setTimeout(() => {
    console.log("getting the beef from the butcher");
    callback3("beef");
  }, 2000);
}

function getBuns3(callback3) {
  console.log("getting the buns from the bakery");
  callback3("whole grains");
}

function putMeatBetwenBuns3(bunsType3, meatType3, callback3) {
  console.log("preparing the burger...");
  callback3(`The ${meatType3} burger with ${bunsType3} buns is created`);
}

const makeBurger3 = () => {
  getMeat3((meatType3) => {
    getBuns3((bunsType3) => {
      putMeatBetwenBuns3(bunsType3, meatType3, (finalBurger3) => {
        console.log(finalBurger3);
      });
    });
  });
};

const burger3 = makeBurger3();

/* ===== Section 4: Promises version (renamed with suffix 4) ===== */
function startBurger4() {
  return new Promise((resolve4, reject4) => {
    console.log("walking to the butcher...");
    setTimeout(() => {
      console.log("getting the beef from the butcher");
      resolve4("beef");
    }, 2000);
  });
}

startBurger4()
  .then((meatType4) => {
    console.log("getting the buns from the bakery");
    return [meatType4, "whole grains"];
  })
  .then(([meatType4b, bunsType4]) => {
    console.log("preparing the burger...");
    console.log(`The ${meatType4b} burger with ${bunsType4} buns is created`);
  });
