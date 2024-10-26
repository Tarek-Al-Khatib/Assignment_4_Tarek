var words = [
  "apple",
  "banana",
  "cherry",
  "dog",
  "elephant",
  "flower",
  "giraffe",
  "house",
  "island",
  "jungle",
  "kite",
  "lemon",
  "mountain",
  "notebook",
  "ocean",
  "penguin",
  "queen",
  "river",
  "sunflower",
  "tiger",
  "umbrella",
  "volcano",
  "waterfall",
  "xylophone",
  "yacht",
  "zebra",
];

//https://stackoverflow.com/questions/5915096/get-a-random-item-from-a-javascript-array
var randomIndex = Math.floor(Math.random() * words.length);
var wordGame = words[randomIndex];

var wrongGuesses = 0;
var letters = document.querySelectorAll(".letter");
var hangContainer = document.getElementById("hang");
var answerContainer = document.getElementById("answer-section");

var hangmanImages = [
  "./assets/head.svg",
  "./assets/body.svg",
  "./assets/left-hand.svg",
  "./assets/right-hand.svg",
  "./assets/left-leg.svg",
  "./assets/right-leg.svg",
];

//https://stackoverflow.com/questions/49680484/how-to-add-one-event-listener-for-all-buttons
letters.forEach((letter) => {
  var letterText = letter.innerText;
  letter.addEventListener("click", function () {
    letterClick(letterText);
  });
});

//chatgpt
let correctGuesses = new Set();
function displayWord() {
  answerContainer.innerHTML = wordGame
    .split("")
    .map((letter) => (correctGuesses.has(letter) ? letter : "_"))
    .join(" ");
}
displayWord();

function letterClick(letter) {
  var clickedLetter = [...letters].find((t) => t.innerText == letter);
  console.log(clickedLetter.innerHTML);
}
