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
//
var wordGame = words[randomIndex];
console.log(wordGame);

var wrong = 0;
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

var classNames = [
  "head",
  "body",
  "left-hand",
  "right-hand",
  "left-leg",
  "right-leg",
];

//https://stackoverflow.com/questions/49680484/how-to-add-one-event-listener-for-all-buttons
letters.forEach((letter) => {
  var letterText = letter.innerText;
  letter.addEventListener("click", function () {
    letterClick(letterText);
  });
});
//

//chatgpt
let correctGuesses = new Array(wordGame.length).fill("_");
function displayWord() {
  answerContainer.innerHTML = correctGuesses.join(" ");
}
displayWord();
//

function letterClick(letter) {
  var clickedLetter = [...letters].find((t) => t.innerText == letter);
  console.log(clickedLetter.innerHTML);
  clickedLetter.classList.add("pressed");

  if (wordGame.includes(clickedLetter.innerHTML.toLowerCase())) {
    updateCorrectGuesses(clickedLetter.innerHTML.toLowerCase());
    console.log(true);
    displayWord();

    if (correctGuesses.join("") == wordGame) {
      //https://www.w3schools.com/jsref/met_win_settimeout.asp
      setTimeout(() => alert("Congrats!"));
      location.reload();
    }
  } else {
    wrong++;
    putHangman();
    if (wrong == 6) {
      //https://www.w3schools.com/jsref/met_loc_reload.asp
      setTimeout(() => alert("You failed!"));
      location.reload();
    }
  }
}

function updateCorrectGuesses(letter) {
  for (let i = 0; i < wordGame.length; i++) {
    if (wordGame[i] === letter) {
      correctGuesses[i] = letter;
    }
  }
}

function putHangman() {
  if (wrong <= 6) {
    //https://www.w3schools.com/jsref/met_document_createelement.asp
    var image = document.createElement("img");
    //
    image.src = hangmanImages[wrong - 1];
    //https://www.w3schools.com/jsref/prop_element_classlist.asp
    image.classList.add(classNames[wrong - 1]);
    hangContainer.appendChild(image);
  }
}
