import { HashMap } from "./hashmap.mjs";

const test = HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("banana", "green");
test.set("peach", "a");

console.log(test.keys());
