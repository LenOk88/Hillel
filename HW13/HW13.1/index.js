const nameRegex = /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ\s]+$/;
const messageRegex = /^.{5,}$/;
const phoneRegex = /^\+380\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(event) {
    event.preventDefault();
    
    let isValid = true;

    document.getElementById('nameError').textContent = '';
    document.getElementById('messageError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('emailError').textContent = '';

    const name = document.getElementById('name').value;
    if (!nameRegex.test(name)) {
        document.getElementById('nameError').textContent = 'Будь ласка, введіть правильне ім’я (тільки букви).';
        isValid = false;
    }

    const message = document.getElementById('message').value;
    if (!messageRegex.test(message)) {
        document.getElementById('messageError').textContent = 'Повідомлення повинно бути не менше 5 символів.';
        isValid = false;
    }

    const phone = document.getElementById('phone').value;
    if (!phoneRegex.test(phone)) {
        document.getElementById('phoneError').textContent = 'Номер телефону має починатися з +380 і містити 9 цифр.';
        isValid = false;
    }

    const email = document.getElementById('email').value;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Будь ласка, введіть коректну адресу електронної пошти.';
        isValid = false;
    }

    if (isValid) {
        console.log("Name:", name);
        console.log("Message:", message);
        console.log("Phone:", phone);
        console.log("Email:", email);
    }
}
const form = document.getElementById('contactForm');
if (form) {
form.addEventListener('submit', validateForm);
} else {
console.error('Форма не знайдена!');
}

