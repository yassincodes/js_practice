let player1Score = 0
let player2Score = 0
let player1Turn = true
let theRandomNumber = 0
const rollBtn = document.getElementById('rollBtn')
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')

rollBtn.addEventListener('click', function() {
    theRandomNumber = Math.floor(Math.random() * 6) + 1;
    startGame()
})

function startGame() {
    if (player1Turn) {
        player1Score += theRandomNumber
        player1Scoreboard.innerHTML = player1Score 
        player1Turn = false
    } else {
        player2Score += theRandomNumber
        player2Scoreboard.innerHTML = player2Score
        player1Turn = true
    }
}


