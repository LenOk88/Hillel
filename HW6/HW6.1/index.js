
const message = prompt('Enter your string'); 
if (!message) {
    alert('You did not enter a string.');
} else {
    const chars = prompt('Enter some chars for removing').split('');
    if (!chars.length) {
        alert('You did not enter any characters to remove.');
    } else {
        function foo(string, arr) {
            return string.split('').filter(char => !arr.includes(char)).join('');
        }

        const result = foo(message, chars);
        alert(result);
    }
}