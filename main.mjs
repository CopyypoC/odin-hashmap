import { Hashmap } from "./hashmap.mjs";

const test = Hashmap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("banana", "green");

console.log(test.remove("apple"));
console.log(test.remove("a"));
