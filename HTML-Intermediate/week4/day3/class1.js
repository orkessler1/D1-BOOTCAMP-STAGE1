let meetup = {
  title: "Conference",
  room: { number: 23, participants: ["John","Ann"] }
};
console.log(JSON.stringify(meetup, null, 2));


let meetup = {
  title: "Conference",
  date: new Date(Date.UTC(2017, 0, 1)),
  room : 208
};

alert(JSON.stringify(meetup));

/*
  {"title":"Conference","date":"2017-01-01T00:00:00.000Z","room":208}
*/

const event = new Date('May 21, 2020 12:15:30 UTC');

const jsonDate = event.toJSON();

console.log(jsonDate);[]



class User {
  #age = 0;
  constructor(name) {
    this.name = name;
  }
  get age() {
    return this.#age;
  }
  set age(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error('Age must be a non-negative integer');
    }
    this.#age = value;
  }
}

const u = new User("Ann");
u.age = 30;
console.log(u.age);



const func = () => {
    try {
        console.log("starting the try block")
        //Unexisting variable
        hello
        //not accessed if there is an error with the above code
        console.log("finishing the try block")
    } catch (err) {
        console.log("starting the catch block")
        console.log(err)
    } finally {
        console.log("Function done")
    }
}

func()



