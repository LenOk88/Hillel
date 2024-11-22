const number = prompt("Enter your number");

if (number && Number.parseInt(number)) {
  for (let i = 1; i <= 100 && number >= i ** 2; i++) {
    console.log(i);
  }
} else {
  alert("Please enter number");
}
