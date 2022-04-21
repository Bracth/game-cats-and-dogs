import { startPageView } from "./start-page/startPageView.js";
import { gameView } from "./game/gameView.js";
const mainElement = document.querySelector("#main");

export function controller() {
  // render the startpage
  startPageView(mainElement, initGame);

  function initGame(mainElement, gameLevel) {
    mainElement.innerHTML = "";

    // render the game page
    gameView(mainElement, gameLevel);
  }
}

// call the function to init the app
controller();
