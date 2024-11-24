const array = [{}, 1, 2, 3, 4, 5, 6, 'string', null];

function calculateAverage(array) {
    const numbersOnly = array.filter(item => typeof item === 'number');
    
    if (numbersOnly.length > 0) {
        const sum = numbersOnly.reduce((acc, curr) => acc + curr, 0);
        return sum / numbersOnly.length;
    } else {
        return 'No numbers in the array';
    }
}

const result = calculateAverage(array);
console.log(result);
