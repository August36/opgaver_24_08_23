const title = document.querySelector("h1");
const secondTitle = document.querySelector("h2");
const thirdTitle = document.querySelector("h3");
const paragraph = document.querySelector("p");
const artikel = document.querySelector("article");
const spanElement = document.createElement("span");

title.textContent = "en helt ny titel";
secondTitle.textContent = "h2 chaaanged";
paragraph.createElement = "span";

spanElement.textContent = "nyt nyt hejehje";

title.appendChild(spanElement);

// new image opgave

const newImage = "https://picsum.photos/id/33/200/300";

const imageElement = document.getElementById("img1");

imageElement.src = newImage;

// new image2

const newImage2 = "https://picsum.photos/id/66/200/300";

const imageElement2 = document.getElementById("img2");

imageElement2.src = newImage2;

// opg 4 - som jeg allerede lavede tidligere med spanElement, med hjælp fra Carl - prøver selv her

const newArticleElement = document.createElement("article");

const newImageElement = document.createElement("img");
