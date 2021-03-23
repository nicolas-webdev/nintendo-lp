//Mario section

const actionBlock = document.querySelector(".action-block");
const smallMario = document.querySelector(".small-mario");
const bigMario = document.querySelector(".big-mario");
const jumpingMario = document.querySelector(".jumping-mario");
const marioLogo = document.querySelector(".mario-logo img");
const marioVoice = document.getElementById("mario-voice");

function marioJump() {
  marioVoice.play();
  smallMario.style.display = "none";
  actionBlock.style.display = "none";
  jumpingMario.style.display = "block";
  jumpingMario.classList.add("jump");
  jumpingMario.classList.add("hide");
  bigMario.classList.add("jump");
  setTimeout(() => {
    jumpingMario.style.display = "none";
  }, 200);
  marioLogo.classList.add("show");
  actionBlock.removeEventListener("click", marioJump);
}

actionBlock.addEventListener("click", marioJump);

// Zelda Section
const zeldaSection = document.querySelector(".Link");
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

//Pokemon
