import getPhotos from "../service.mjs";
import { GamePicture } from "../GamePicture.js";
import shuffle from "../lib/sort.js";

export async function gameService(gameLevel) {
  // set the number of pictures that we need
  const gameElements = [];
  let numberOfPictures = gameLevel;

  if (gameLevel % 2 !== 0) {
    numberOfPictures = (numberOfPictures + 1) / 2;
  } else {
    numberOfPictures = numberOfPictures / 2;
  }

  console.log(numberOfPictures);

  // bring the photos from the api
  const catsPhotos = await getPhotos("cat", numberOfPictures);
  const dogsPhotos = await getPhotos("dog", numberOfPictures);

  // instance the pictures
  for (let i = 0; i < numberOfPictures; i++) {
    console.log(catsPhotos[i]);
    const gameElement = new GamePicture("cats", catsPhotos[i].urls.small);
    gameElements.push(gameElement);
  }

  for (let i = 0; i < numberOfPictures; i++) {
    const gameElement = new GamePicture("dogs", dogsPhotos[i].urls.small);
    gameElements.push(gameElement);
  }
  // shuffle the pictures
  const gameBlocks = shuffle(gameElements);
  // we return all the pictures ready to use
  return gameBlocks;
}
