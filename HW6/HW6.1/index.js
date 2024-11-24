let message = prompt('Enter your string');
let chars = prompt('Enter some chars for removing');

for (let i = 0; i < chars.length; i++) {
    message = message.split(chars[i]).join('');
}

console.log("Result message:", message);