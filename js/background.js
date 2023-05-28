const images = ["back1.jpg","back2.jpg","back3.jpg","back4.png"];

const ChosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(img/${ChosenImage})`;

document.body.style.backgroundSize = `cover`;

