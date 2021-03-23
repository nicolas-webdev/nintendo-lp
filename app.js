//Mario section

const actionBlock = document.querySelector(".action-block");
const smallMario = document.querySelector(".small-mario");
const bigMario = document.querySelector(".big-mario");
const jumpingMario = document.querySelector(".jumping-mario");
const marioLogo = document.querySelector(".mario-logo img");
const marioVoice = document.getElementById("mario-voice");

const marioVoices = [
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_boing.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_doh.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_game_over.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_game_over.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_haha.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_hello.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_here_we_go.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_here_we_go.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_hoo.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_hoohoo.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_tired.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_its_me.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_lets_go.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_mamma-mia.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_okey-dokey.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_oof.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_press_start.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_so_long_bowser.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_thank_you.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_ungh.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_waha.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_whoa.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_yahoo.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_yippee.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_burned.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_dreaming.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_drowning.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_falling.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_lost_a_life.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_hurt.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_weak.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_pulling_up.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_snore_part1.wav",
  "https://themushroomkingdom.net/sounds/wav/sm64/sm64_mario_snore_part2.wav",
];

function marioJump() {
  smallMario.style.display = "none";
  actionBlock.removeEventListener("click", marioJump);
  actionBlock.addEventListener("click", marioTalk);
  marioVoice.play();
  actionBlock.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-15%)" },
      { transform: "translateY(0)" },
    ],
    {
      duration: 300,
    }
  );
  jumpingMario.style.display = "block";
  jumpingMario.classList.add("jump");
  jumpingMario.classList.add("hide");
  bigMario.classList.add("jump");
  setTimeout(() => {
    jumpingMario.style.display = "none";
  }, 200);
  marioLogo.classList.add("show");
}

function marioTalk() {
  marioLogo.removeEventListener("click", marioTalk);
  let randomVoice = Math.round(Math.random() * marioVoices.length - 1);
  const newVoice = new Audio(marioVoices[randomVoice]);
  newVoice.play();
  actionBlock.animate(
    [
      { transform: "translateY(0)" },
      { transform: "translateY(-15%)" },
      { transform: "translateY(0)" },
    ],
    {
      duration: 300,
    }
  );
  setTimeout(() => {
    marioLogo.addEventListener("click", marioTalk);
  }, 1000);
}

actionBlock.addEventListener("click", marioJump);

// Zelda Section
const zeldaSection = document.querySelector(".Link");
const zeldaSong = document.getElementById("zelda-song");
const navi = document.querySelector(".navi");
const naviVoice = document.getElementById("hey-listen");
let mousePosition = [0, 0];
let naviPosition = [0, 0];

const onMouseMove = (e) => {
  mousePosition = [e.clientX, e.clientY];
};

function updateNavi(x, y) {
  naviPosition = mousePosition;
  navi.style.left = naviPosition[0] - 200 + "px";
  navi.style.top = naviPosition[1] - 200 + "px";
}

function heyListen() {
  naviVoice.play();
}

document.addEventListener("mousemove", onMouseMove);

setInterval(() => {
  updateNavi();
}, 1500);

navi.addEventListener("mouseover", heyListen);

let el = document.getElementById("zelda-logo");

const height = el.clientHeight;
const width = el.clientWidth;

el.addEventListener("mousemove", handleMove);

function handleMove(e) {
  const xVal = e.layerX;
  const yVal = e.layerY;
  const yRotation = 20 * ((xVal - width / 2) / width);

  const xRotation = -20 * ((yVal - height / 2) / height);

  const string =
    "perspective(500px) scale(1.1) rotateX(" +
    xRotation +
    "deg) rotateY(" +
    yRotation +
    "deg)";

  el.style.transform = string;
}

el.addEventListener("mousedown", function () {
  el.style.transform = "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
});

el.addEventListener("mouseup", function () {
  el.style.transform = "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
});

function startZelda() {
  if (
    zeldaSection.getBoundingClientRect().top === 0 ||
    zeldaSection.getBoundingClientRect().y === 0
  ) {
    zeldaSection.removeEventListener("mouseover", startZelda);
    zeldaSong.play();
    zeldaSection.addEventListener("mouseout", endZelda);
  }
}

function endZelda() {
  if (
    zeldaSection.getBoundingClientRect().top !== 0 ||
    zeldaSection.getBoundingClientRect().y !== 0
  ) {
    zeldaSection.removeEventListener("mouseout", endZelda);
    zeldaSong.pause();
    zeldaSong.currentTime = 0;

    zeldaSection.addEventListener("mouseover", startZelda);
  }
}

zeldaSection.addEventListener("mouseover", startZelda);
zeldaSection.addEventListener("mouseout", endZelda);

//Pokemon

const pokemonSection = document.querySelector(".Pokemon");
const battleSong = document.getElementById("battle-song");
const opponent = document.getElementById("opponent");
const self = document.getElementById("self");

setInterval(() => {
  getPokemon();
}, 5000);

function getPokemon() {
  if (
    pokemonSection.getBoundingClientRect().top === 0 ||
    pokemonSection.getBoundingClientRect().y === 0
  ) {
    let randomPokemonSelf = Math.round(Math.random() * 151);
    let randomPokemonOpponent = Math.round(Math.random() * 150);
    fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonSelf}`)
      .then(function (response) {
        response.json().then((data) => {
          self.src = data.sprites.back_default;
        });
      })
      .catch(function (err) {
        // There was an error
        console.warn("Something went wrong.", err);
      });
    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemonOpponent}`)
        .then(function (response) {
          response.json().then((data) => {
            opponent.src = data.sprites.front_default;
          });
        })
        .catch(function (err) {
          // There was an error
          console.warn("Something went wrong.", err);
        });
    }, 2000);
  }
}

function startBattle() {
  if (
    pokemonSection.getBoundingClientRect().top === 0 ||
    pokemonSection.getBoundingClientRect().y === 0
  ) {
    pokemonSection.removeEventListener("mouseover", startBattle);
    battleSong.volume = 0.5;
    battleSong.play();
    pokemonSection.addEventListener("mouseout", endBattle);
  }
}

function endBattle() {
  if (
    pokemonSection.getBoundingClientRect().top !== 0 ||
    pokemonSection.getBoundingClientRect().y !== 0
  ) {
    pokemonSection.removeEventListener("mouseout", endBattle);
    battleSong.pause();
    battleSong.currentTime = 0;
    pokemonSection.addEventListener("mouseover", startBattle);
  }
}

pokemonSection.addEventListener("mouseover", startBattle);
pokemonSection.addEventListener("mouseout", endBattle);

// Animal Crossing

const doumoriSection = document.querySelector(".Animal-Crossing");
const themeSong = document.getElementById("new-horizons");

function startPlaying() {
  if (
    doumoriSection.getBoundingClientRect().top === 0 ||
    doumoriSection.getBoundingClientRect().y === 0
  ) {
    console.log("start");
    doumoriSection.removeEventListener("mouseover", startPlaying);
    themeSong.play();
    doumoriSection.addEventListener("mouseout", stopPlaying);
  }
}

function stopPlaying() {
  if (
    doumoriSection.getBoundingClientRect().top !== 0 ||
    doumoriSection.getBoundingClientRect().y !== 0
  ) {
    console.log("end");
    doumoriSection.removeEventListener("mouseout", stopPlaying);
    themeSong.pause();
    themeSong.currentTime = 0;
    doumoriSection.addEventListener("mouseover", startPlaying);
  }
}

doumoriSection.addEventListener("mouseover", startPlaying);
doumoriSection.addEventListener("mouseout", stopPlaying);

let dragItem = document.querySelector(".murabito");
let container = document.querySelector(".murabito-container");

let active = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

container.addEventListener("touchstart", dragStart, false);
container.addEventListener("touchend", dragEnd, false);
container.addEventListener("touchmove", drag, false);

container.addEventListener("mousedown", dragStart, false);
container.addEventListener("mouseup", dragEnd, false);
container.addEventListener("mousemove", drag, false);

function dragStart(e) {
  if (e.type === "touchstart") {
    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;
  } else {
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  }

  if (e.target === dragItem) {
    active = true;
  }
}

function dragEnd(e) {
  initialX = currentX;
  initialY = currentY;

  active = false;
}

function drag(e) {
  if (active) {
    e.preventDefault();

    if (e.type === "touchmove") {
      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    } else {
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
}

// Kirby

const kirby = document.querySelector(".kirby");

function growbig() {
  kirby.classList.add("growbig");
}

kirby.addEventListener("click", growbig);
