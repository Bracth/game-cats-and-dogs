import { controller } from "../index.js";

export function endGameView(mainElement, totalPoints) {
  // set the html
  const endGameElement = document.createElement("div");
  endGameElement.innerHTML = `<h1>Finnish</h1>
    <h2>Your score was ${totalPoints} points</h2>
    <div id="restart-button-container"><button id="restart-button">RESTART</button></div>`;
  endGameElement.id = "end-game-container";
  mainElement.appendChild(endGameElement);

  // adding the functionality to the button
  const restartButtonElement = document.querySelector("#restart-button");
  restartButtonElement.addEventListener("click", () => {
    mainElement.innerHTML = "";

    // we reset all the app
    controller();
  });
}
