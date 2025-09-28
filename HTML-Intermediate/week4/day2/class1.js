let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
}
console.log(Object.values(myObj).length);
console.log(Object.keys(myObj).length);


const address = {
  street: 'Evergreen Terrace',
  number: '742',
  city: 'Springfield',
  state: 'NT',
  zip: '49007',
};

const { street, city } = address;
console.log(street) //Evergreen Terrace
console.log(city) //Springfield


const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63
    }
};

// We define 3 local variables: name, maths, science
// Default value to the variable science, in case the key doesn't exist in the object student
const { name, scores: {maths, science = 50} } = student;

console.log(`${name} scored ${maths} in Maths and ${science} in Elementary Science.`);
// John Doe scored 74 in Maths and 50 in Elementary Science.


let obj = {foo: 1, bar: 2};
let newObj = {...obj, baz: 3}
console.log(newObj) //{ foo: 1, bar: 2, baz: 3 }

// If property keys clash, the property that is mentioned last “wins”:
let obj = {foo: 1, bar: 2, baz: 3};
let newObj = {...obj, foo: true}
console.log(newObj) //{ foo: true, bar: 2, baz: 3 }

let newObj =  {foo: true, ...obj}
console.log(newObj) //{ foo: 1, bar: 2, baz: 3 }




