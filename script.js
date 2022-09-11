const p1Btn = document.querySelector("#p1Button");
const p2Btn = document.querySelector("#p2Button");
const resetButton = document.querySelector("#reset");
const p1DisplayScore = document.querySelector("#p1DisplayScore");
const p2DisplayScore = document.querySelector("#p2DisplayScore");
const selectWinningScore = document.querySelector("#playTo");
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;
p1Btn.addEventListener("click", () => {
  if (!isGameOver) {
    p1Score += 1;
    if (p1Score === winningScore) {
      isGameOver = true;
      p1DisplayScore.classList.add("winner");
      p2DisplayScore.classList.add("loser");
    }
  }
  p1DisplayScore.textContent = p1Score;
});
p2Btn.addEventListener("click", (e) => {
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameOver = true;
      p2DisplayScore.classList.add("winner");
      p1DisplayScore.classList.add("loser");
    }
  }
  p2DisplayScore.textContent = p2Score;
});
selectWinningScore.addEventListener("change", () => {
  winningScore = parseInt(selectWinningScore.value);
  reset();
});
resetButton.addEventListener("click", reset);
function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1DisplayScore.textContent = 0;
  p2DisplayScore.textContent = 0;
  p2DisplayScore.classList.remove("winner", "loser");
  p1DisplayScore.classList.remove("winner", "loser");
}
