function product(x) {
    return function(y) {
      return x * y;
    };
  }
const result = product(5)(2);

console.log(result);