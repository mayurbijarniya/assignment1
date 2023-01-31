const wordToGuess = "javascript";
let correctLetters = [];

for (let i = 0; i < wordToGuess.length; i++) {
  correctLetters.push("_");
}

document.getElementById("word-to-guess").innerHTML = correctLetters.join(" ");

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", checkLetter);

function checkLetter() {
  const letterInput = document.getElementById("letter-input").value;
  let correct = false;

  for (let i = 0; i < wordToGuess.length; i++) {
    if (wordToGuess[i] === letterInput) {
      correctLetters[i] = letterInput;
      correct = true;
    }
  }

  if (correct) {
    document.getElementById("message").innerHTML = "Correct!";
    document.getElementById("word-to-guess").innerHTML =
      correctLetters.join(" ");
  } else {
    document.getElementById("message").innerHTML = "Incorrect, try again.";
  }
}
