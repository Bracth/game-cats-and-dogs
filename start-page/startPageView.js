export function startPageView(mainElement, initGame) {
  // create the HTML
  const startPageElement = document.createElement("div");
  startPageElement.id = "container";
  startPageElement.innerHTML = `<h1 id="title">Welcome to the rain cats and dogs game</h1>
    <p id="description">In this game you have to select all the images of the corresponding animal, sometimes you have to find all the dogs, other times will be cats.
    You have only 10 seconds to find them all. 
    <h2 id="difficultie-title">You can select between 3 levels of difficulties.</h2>
    <div id="radio-container">
      <input type="radio" name="difficulty" value="easy" id="easy-difficulty" checked></input>
      <label for="easy-difficulty">EASY</label>
      <input type="radio" name="difficulty" value="medium" id="medium-difficulty"></input>
      <label for="medium-difficulty">MEDIUM</label>
      <input type="radio" name="difficulty" value="hard" id="hard-difficulty"></input>
      <label for="hard-difficulty">HARD</label>
    </div>
    <div id="button-container"><button id="start-button">START</button></div>
    `;
  mainElement.appendChild(startPageElement);

  // Start button functionally

  const buttonElement = document.querySelector("#start-button");
  buttonElement.addEventListener("click", () => {
    // select the difficulty setting
    const radioElements = Array.from(document.querySelectorAll("input"));
    const chekedRadio = radioElements.filter(
      (radioElement) => radioElement.checked
    );
    const difficulty = chekedRadio[0].value;

    let gameLevel = 0;

    if (difficulty === "easy") {
      gameLevel = 9;
    } else if (difficulty === "medium") {
      gameLevel = 16;
    } else {
      gameLevel = 25;
    }

    // Initialazing the game
    initGame(mainElement, gameLevel);
  });
}
