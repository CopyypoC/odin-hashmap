import { HashMap } from "./hashmap.mjs";

const test = HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// Rehash breakpoint
test.set("moon", "silver");

console.log(test.get("apple"));
console.log(test.has("ice cream"));
console.log(test.remove("carrot"));
console.log(test.keys());
console.log(test.length());
// console.log(test);
// console.log(test);
// console.log(test);
// console.log(test);
// console.log(test);
// console.log(test);
