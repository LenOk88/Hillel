const message = prompt("Enter your name", "Your name");
// alert('Hello,' + message + '!' + ' ' + 'How are you?');
if (message !== null) {
    alert(`Hello, ${message}! How are you?`);
  } else {
    alert("Cancellation");
  }