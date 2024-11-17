// console.log(typeof undefined);
// console.log(typeof 0);
// console.log(typeof 10e6);
// console.log(typeof true);
// console.log(typeof Symbol('id'));
// console.log(typeof 'Lena');
// console.log(typeof []);
// console.log(typeof null);

const string = "Lena";
const number = 8;
const boolean = true;
let isUndefined;
const symbol = Symbol('id');
const bigInt = 1n;
const object = Object();
const message4 = `JS types:\n\n${typeof string}\n${typeof number}\n${typeof boolean}\n${typeof isUndefined}\n${typeof symbol}\n${typeof bigInt}\n${typeof object}`;
console.log(message4);