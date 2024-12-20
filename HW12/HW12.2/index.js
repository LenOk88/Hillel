document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('buttonContainer');
    container.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const buttonId = event.target.getAttribute('data-id');
            alert(`Ви натиснули на кнопку: ${buttonId}`);
        }
    });
});