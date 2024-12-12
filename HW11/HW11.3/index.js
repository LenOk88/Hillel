const images = ['img/1.jpeg', 'img/2.jpeg', 'img/3.jpeg', 'img/4.jpeg', 'img/5.jpeg', 'img/6.jpeg', 'img/7.jpeg', 'img/8.jpeg', 'img/9.jpeg'];

const randomIndex = Math.floor(Math.random() * images.length);
const randomImage = images[randomIndex];

const imgElement = document.createElement('img');
imgElement.src = randomImage;
imgElement.style.width = '300px';
imgElement.style.height = 'auto';
document.body.appendChild(imgElement);