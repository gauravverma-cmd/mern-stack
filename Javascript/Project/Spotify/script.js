async function getSongs() {
  let a = await fetch("http://127.0.0.1:5500/Project/Spotify/song/");
  let response = await a.text();

  let div = document.createElement("div");
  div.innerHTML = response;

  let as = div.getElementsByTagName("a");
  let songs = [];

  for (let i = 0; i < as.length; i++) {
    const element = as[i];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/song/")[1]);
    }
  }
  return songs;
}

let currentSong = new Audio();
let plays;

const playMusic = (track) => {
  currentSong.src = "http://127.0.0.1:5500/Project/Spotify/song/" + track;
  currentSong.play();
  plays.src = "pause.svg"; // change icon when song starts
};

async function main() {
  let songs = await getSongs();
  let songUl = document.querySelector(".songList ul");

  // Add songs to UI
  for (const song of songs) {
    songUl.innerHTML += `
      <li>
        <img width="25" src="musicIcon.svg" alt="">
        <div class="info">
          <div>${song.replaceAll("%20", " ")}</div>
          <div>Gaurav</div>
        </div>
        <div class="playnow">
          <span>Play Now</span>
          <img class="invert playbtnlist" width="25" src="play.svg" alt="">
        </div>
      </li>`;
  }

  // List click → play music
  Array.from(document.querySelectorAll(".songList li")).forEach(li => {
    li.addEventListener("click", () => {
      let trackName = li.querySelector(".info").firstElementChild.innerHTML.trim();
      playMusic(trackName);
    });
  });

  // Play / Pause Button
  plays = document.querySelector(".play");
  plays.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      plays.src = "pause.svg";
    } else {
      currentSong.pause();
      plays.src = "play.svg";
    }
  });
}

main();
