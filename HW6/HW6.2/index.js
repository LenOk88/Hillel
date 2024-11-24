const array = [{}, 1, 2, 3, 4, 5, 6, 'string', null];
const numbersOnly = array.filter(item => typeof item === 'number');

console.log(numbersOnly);

let sum = 0;
if (numbersOnly.length > 0) {
    sum = numbersOnly.reduce((acc, curr) => acc + curr, 0);
    let result = sum / numbersOnly.length;
    console.log(result);
} else {
    console.log('No numbers in the array');
}
