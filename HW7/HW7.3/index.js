
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
            console.log("Строка не введена");
        } 

        if (userInput > 100) {
            let number = parseInt(userInput);
            console.log("Число більше 100:" ,number);
            break;
        } else {
            console.log("Повинно бути число більше 100! ", userInput);
        }
            
        attempts++;
    }

    if (attempts === maxAttempts) {
        console.log("Досягнуто максимального ліміту спроб.");
    }
}
printChoise();

