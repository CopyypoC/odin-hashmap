import { HashMap } from "./hashmap.mjs";

const test = HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("grape", "purple");

console.log(test.keys());
