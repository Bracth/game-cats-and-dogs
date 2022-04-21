import { randomNumber } from "../lib/randomNumber.js";
import { gameService } from "./gameService.js";
import { endGameView } from "../end-page/endGameView.js";

export async function gameView(mainElment, gameLevel) {
  // function to finnish the game
  function finnishGame(mainElement, totalPoints) {
    mainElement.innerHTML = "";
    // render the end game view
    endGameView(mainElement, totalPoints);
  }

  // find cat and dog ramdom select
  let gameFind = "";
  if (randomNumber() === 0) {
    gameFind = "dogs";
  } else {
    gameFind = "cats";
  }

  // creating the html
  const h1Element = document.createElement("h1");
  h1Element.textContent = `Can you find all the ${gameFind}?`;
  mainElment.appendChild(h1Element);

  const formElement = document.createElement("form");
  formElement.id = "game-form";
  formElement.innerHTML = `<div id="game-container"></div>
            <button id="submit-game" type="submit">SUBMIT</button>`;

  mainElment.appendChild(formElement);

  //call the api to bring the photos
  const gameBlocks = await gameService(gameLevel);

  // make the html of the game with all the animals pictures
  let gameBlockNumer = 0;

  const gameContainerElement = document.querySelector("#game-container");
  for (const gameBlock of gameBlocks) {
    const pictureElement = document.createElement("div");
    pictureElement.id = "picture";

    pictureElement.innerHTML = `
        <input type="checkbox" id="myCheckbox${gameBlockNumer}" value="${gameBlock.tag}"/>
        <label for="myCheckbox${gameBlockNumer}"><img src="${gameBlock.url}" /></label>`;

    gameContainerElement.appendChild(pictureElement);
    gameBlockNumer += 1;
  }

  //function to end the game
  function endGame() {
    // stop the timer
    clearTimeout(timeLeft);

    // we check all the inputs to count the points
    const picturesElements = Array.from(document.querySelectorAll("input"));
    const elementsToFind = picturesElements.filter((pictureElement) => {
      return pictureElement.value === gameFind;
    });
    const maxPoints = elementsToFind.length;

    const selectElements = elementsToFind.filter((elementToFind) => {
      return elementToFind.checked;
    });
    const points = selectElements.length;
    totalPoints = (maxTime - count) * points;

    // we call the finnishgame function to show the final view
    finnishGame(mainElment, totalPoints);
  }

  // set the timers
  const maxTime = 1500;
  let totalPoints = 0;

  const time = setTimeout(endGame, 15000);
  let count = 0;
  function addCount() {
    console.log(count);
    count++;
  }
  const timeLeft = setInterval(addCount, 10);

  // event of the submit button
  formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    clearTimeout(time);
    endGame();
  });
}
