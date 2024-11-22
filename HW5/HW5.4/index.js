let Check = true;

do {
  const digit = prompt("Enter your number");
  let isPrime = true;

  if (digit && Number.parseInt(digit)) {
    for (let i = 2; i <= Math.sqrt(Number.parseInt(digit)); i++) {
      if (digit % i === 0) {
        isPrime = false;
      }
    }
  } else {
    if (digit === null) break;

    alert("Please enter number");
    continue;
  }

  alert(`Digit ${digit} is ${isPrime ? "prime" : "not prime"}`);

} while (Check);

