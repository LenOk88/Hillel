const money = prompt("введи:\n\n1. Euro - €.\n2. Dollar - $");
const EURO = 30;
const DOLLAR = 27;
let result = "";

for (let i = 10; i <= 100; i += 10) {
  switch (money && money.toLowerCase()) {
    case "euro":
    case "€":
    case "1": {
      result += `${i}€ = ${Math.round(i * EURO)}₴;\n`;
      break;
    }
    case "dollar":
    case "$":
    case "2": {
      result += `${i}$ = ${Math.round(i * DOLLAR)}₴;\n`;
      break;
    }
    default: {
      result = "Нужно выбрать Euro или Dollar";
      break;
    }
  }
}
alert(result);
