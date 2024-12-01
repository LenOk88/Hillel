const message = prompt("Enter your name", "Your name");
if (message !== null) {
    alert(`Hello, ${message}! How are you?`);
  } else {
    alert("Cancellation");
  }