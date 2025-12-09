function getRandomNumberElement(items: number[]): number {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

let numbers = [1, 5, 7, 4, 2, 9];
console.log(getRandomNumberElement(numbers));


let mixedArray: (number | string)[] = [1, "apple", 2, "banana", 3];

// Retrieve a random element from the mixed array
let randomElement = getRandomElement(mixedArray);

// Handling the result based on its type
if (typeof randomElement === "number") {
    console.log(`Random number: ${randomElement}`);
} else if (typeof randomElement === "string") {
    console.log(`Random string: ${randomElement}`);
}

let person = merge({ name: "John" }, { age: 25 });

console.log(result);



// Generic interface to manage a collection of items
interface SetManager<T> {
  addItem(item: T): void;
  clearAll(): void;
}

// Class that implements SetManager
class SimpleSet<T> implements SetManager<T> {
  private items: T[] = [];

  addItem(item: T): void {
    this.items.push(item);
  }

  clearAll(): void {
    this.items = [];
  }
}

// Example usage with string type
let stringSet = new SimpleSet<string>();
stringSet.addItem("apple");
stringSet.addItem("banana");
console.log(stringSet);

// Clearing all items
stringSet.clearAll();
console.log(stringSet);


class Pair<T1, T2> {
  constructor(private first: T1, private second: T2) {}

  getFirst(): T1 {
    return this.first;
  }

  getSecond(): T2 {
    return this.second;
  }
}

// Example usage with different types
let pair = new Pair<number, string>(42, "hello");
console.log(pair.getFirst());  // Output: 42
console.log(pair.getSecond()); // Output: hello