// Object destructuring is really useful and is being used a lot by js developers and by popular frameworks like React, Angular and Vue.
const song = {
  title: "One More Light",
  band: "Linkin Park",
  genre: "Alternative",
  length: "3:10"
};

const { title, band, genre, length } = song;

const getSongInfo = ({ title, band }) =>
  console.log(`The song ${title} was made by ${band}`);

export { song, getSongInfo }; // This way is to export multiple things.
