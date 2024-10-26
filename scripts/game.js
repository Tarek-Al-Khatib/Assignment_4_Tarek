const words = [
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
console.log(wordGame);

var wrongGuesses = 0;
var letters = document.querySelectorAll(".letter");
