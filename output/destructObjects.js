"use strict";

// Object destructuring is really useful and is being used a lot by js developers and by popular frameworks like React, Angular and Vue.
var song = {
  title: 'One More Light',
  band: 'Linkin Park',
  genre: 'Alternative',
  length: '3:10'
};
var title = song.title,
    band = song.band,
    genre = song.genre,
    length = song.length;

var getSongInfo = function getSongInfo(_ref) {
  var title = _ref.title,
      band = _ref.band;
  return console.log("The song ".concat(title, " was made by ").concat(band));
};

getSongInfo(song);