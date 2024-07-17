import { sayHello, sum } from "chuluq-belajar-nodejs-npm-library";
import { min, max } from "chuluq-belajar-nodejs-npm-library/number";

console.info(sayHello("Chuluq"));

const numbers = [10, 5, 2];
console.info(sum(numbers));

console.info(min(10, 20));
console.info(max(10, 20));
