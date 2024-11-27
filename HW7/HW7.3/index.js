// function printChoise() {
//     for (let i = 0; i < 10; i++) {
//         const userInput = prompt("Введіть число більше 100:");

//         // Перевірка, чи введено значення
//         if (userInput === null) {
//             alert("Ви скасували введення.");
//             break; // Вихід з циклу, якщо користувач скасував введення
//         }

//         // Перетворення введеного значення в ціле число
//         userInput = parseInt(userInput, 10);

//         // Перевірка, чи є введене значення числом і чи воно більше 100
//         if (isNaN(userInput) || userInput <= 100) {
//             alert("Число має бути більше 100. Спробуйте ще раз.");
//         } else {
//             console.log(`Ви ввели: ${userInput}`);
//             break; // Вихід з циклу, якщо введене число більше 100
//         }
//     }
// }

// function printChoise() {
//     let attempts = 0; // лічильник спроб
//     let userInput; // змінна для збереження введеного числа

//     while (attempts < 10) {  // максимум 10 спроб
//         userInput = prompt("Введіть число більше 100:");
        
//         // Перевірка на коректність введеного числа
//         if (userInput === null) {
//             console.log("Процес був скасований користувачем.");
//             return;  // якщо користувач натиснув "Cancel", зупиняємо виконання
//         }
        
//         userInput = Number(userInput);  // перетворюємо введене значення на число
        
//         if (isNaN(userInput)) {
//             console.log("Будь ласка, введіть коректне число.");
//         } else if (userInput > 100) {
//             console.log("Число більше 100: " + userInput); // вивести останнє правильне введене число
//             break; // вихід із циклу
//         } else {
//             console.log("Число повинно бути більше 100.");
//         }
        
//         attempts++; // збільшити лічильник спроб
//     }

//     if (attempts === 10) {
//         console.log("Досягнуто максимального ліміту спроб.");
//     }
// }


function askForNumber() {
    let attempts = 0;
    const maxAttempts = 10;
    
    while (attempts < maxAttempts) {
        let input = prompt("Введіть число більше 100:");
        let number = parseInt(input);
        
        if (number > 100) {
            console.log("Введено число:", number);
            break;
        } else {
            alert("Число повинно бути більше 100. Спробуйте ще раз.");
        }
        
        attempts++;
    }
}

// Викликаємо функцію
askForNumber();


