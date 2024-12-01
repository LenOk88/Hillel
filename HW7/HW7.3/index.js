
function printChoise() {
    let attempts = 0;
    let maxAttempts = 10;

    while (attempts < maxAttempts) {
        let userInput = prompt("Введіть число більше 100:");

        if (userInput === null) {
            console.log("Процес був скасований користувачем.");
            break;
        }
        if (userInput === '') {
            console.log("Строка не введена.");
            continue;
           }
           userInput = parseInt(userInput);
        if (userInput > 100) {
            console.log("Число більше 100: ", userInput);
            break;
        } else {
            console.log("Число повинно бути більше 100.");
            }
            
        attempts++;
    }

    if (attempts === maxAttempts) {
        console.log("Досягнуто максимального ліміту спроб.");
    }
}
printChoise();

