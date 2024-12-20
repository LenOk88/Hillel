
document.addEventListener("DOMContentLoaded", () => {
    let savedUrl = "";

    const setLinkButton = document.getElementById("set-link");
    const redirectButton = document.getElementById("redirect");

    setLinkButton.addEventListener("click", () => {
        const url = prompt("Введіть посилання:", "https://");
        if (url) {
            savedUrl = url;
            alert("Посилання збережено!");
        } else {
            alert("Посилання не введено.");
        }
    });

    redirectButton.addEventListener("click", () => {
        if (savedUrl) {
            window.location.href = savedUrl;
        } else {
            alert("Посилання не задано. Спочатку натисніть кнопку 'Enter link' і введіть його.");
        }
    });
});