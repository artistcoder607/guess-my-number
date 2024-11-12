let playerScore = 20;
let playerHighScore = 0;
let randomNumber = Math.ceil(Math.random() * 20)
let inputhtml = document.querySelector(".numberInput")
let scorehtml = document.querySelector("#score")
let starthtml = document.querySelector(".start")
let highScorehtml = document.querySelector("#highScore")
// let userName = prompt("bhai aap ka naam kya hai")

inputhtml.addEventListener('input', function() {
    if (inputhtml.value.length > 2) {
        inputhtml.value = inputhtml.value.slice(0, 2);
    }
});

function check() {
if (inputhtml.value == randomNumber) {
    starthtml.innerHTML = "Correct Answer!"
    randomNumber = Math.ceil(Math.random() * 20)
    if (playerScore > playerHighScore) {
    playerHighScore = playerScore
    highScorehtml.innerHTML = playerHighScore
}
playerScore = 20
scorehtml.innerHTML = playerScore
    return starthtml.innerHTML = "Correct Answer!"
} 

if (inputhtml.value > randomNumber) {
    playerScore--
    scorehtml.innerHTML = playerScore
    starthtml.innerHTML = "High Suggestion"
        }

        if (inputhtml.value < randomNumber) {
            playerScore--
            scorehtml.innerHTML = playerScore
            starthtml.innerHTML = "Low Suggestion"
                }

if (playerScore <= 0) {
    playerScore = 0
    scorehtml.innerHTML = playerScore
   }

   if (inputhtml.value > 20) {
    starthtml.innerHTML = "Guess between (1 to 20)"
    playerScore = 20
    scorehtml.innerHTML = playerScore
}
        
}

function again() {
    playerScore = 20
    scorehtml.innerHTML = playerScore
    playerHighScore = 0
    highScorehtml.innerHTML = playerHighScore
    starthtml.innerHTML = "start guessing..."
    inputhtml.value = ""
}