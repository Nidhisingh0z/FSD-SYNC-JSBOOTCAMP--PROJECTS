const voteA = document.querySelector(".vote-a");
const voteB = document.querySelector(".vote-b");
const btnA = document.querySelector(".btn-a");
const btnB = document.querySelector(".btn-b");
const winnerText = document.querySelector(".winner");
const resetBtn = document.querySelector(".reset-btn");

let countA = 0;
let countB = 0;


function checkWinner() {
    if (countA > countB) {
        winnerText.textContent = "Winner: Candidate A";
    } else if (countB > countA) {
        winnerText.textContent = "Winner: Candidate B";
    } else {
        winnerText.textContent = "No Winner Yet";
    }
}


btnA.addEventListener("click", () => {
    countA++;
    voteA.textContent = countA;
    checkWinner();
});

btnB.addEventListener("click", () => {
    countB++;
    voteB.textContent = countB;
    checkWinner();
});

resetBtn.addEventListener("click", () => {
    countA = 0;
    countB = 0;
    voteA.textContent = countA;
    voteB.textContent = countB;
    winnerText.textContent = "No Winner Yet";
});