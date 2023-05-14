import Player from "@vimeo/player";

var throttle = require("lodash.throttle");

const iframe = document.querySelector("iframe");
const player = new Player(iframe);

const onPlay = throttle(function (data) {
  localStorage.setItem("videoplayer-current-time", data.seconds);
}, 1000);

player.on("timeupdate", onPlay);

const currentTime = localStorage.getItem("videoplayer-current-time");

if (currentTime !== null) {
  player.setCurrentTime(currentTime);
}
