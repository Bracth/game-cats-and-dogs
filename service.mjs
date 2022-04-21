async function getPhotos(animal, numberOfPictures) {
  // set url
  const baseUrl = `https://api.unsplash.com/photos/random?query=${animal}&count=${numberOfPictures}&client_id=dtZ1ViXRhVNYdVXTMpLI4Q2RSP5r336EYrsjP1V2CTo`;
  try {
    // make the fetch peticion
    const res = await fetch(baseUrl);
    const photos = await res.json();
    return photos;
  } catch (error) {
    console.log(error);
  }
}

export default getPhotos;
