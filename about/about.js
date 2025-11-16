const tvImage = document.querySelector("#screen");
const playButton = document.querySelector("#play");
const text = document.querySelector("#caption");
const changeButton = document.querySelector("#change");

const images = [
  "../images/pic1.jpeg",
  "../images/pic4.jpeg",
  "../images/pic5.jpeg",
  "../images/pic9.jpeg",
  "../images/pic3.jpeg",
  "../images/pic6.jpeg",
  "../images/pic2.jpeg",
  "../images/pic7.jpeg",
  "../images/pic8.jpeg",
  "../images/pic10.jpeg",
];

const captions = [
  "end of the road",
  "my niece and I at Monterey",
  "frolicking with my friends",
  "my beautiful chihuahua",
  "my parents in Hue, Vietnam",
  "me in Hue, Vietnam",
  "ichiko aoba now showing!",
  "my mom took this for me!",
  "arro's birthday, last year",
  "lounging around",
];

let index = 1;

let play = function () {
  tvImage.style.display = "block";
  playButton.style.display = "none";
  text.textContent = captions[0];
  changeButton.style.display = "block";
};

let changeImage = function () {
  tvImage.src = images[index];
  text.textContent = captions[index];

  index += 1;

  if (index === images.length) {
    index = 0;
  }
};
