const board = document.querySelector(".board");
const startButton = document.querySelector(".btn-start");
const modal = document.querySelector(".modal");
const startGame = document.querySelector(".start-game");
const gameOver = document.querySelector(".game-over");
const restartBtn = document.querySelector(".btn-restart");

const highScoreElement = document.querySelector("#high_score");
const scoreElement = document.querySelector("#score");
const timeElement = document.querySelector("#time");

const blockHeight = 30;
const blockWidth = 30;

let hightScore = localStorage.getItem("highScore") || 0;
let score = 0;
let time = `00-00`;
highScoreElement.innerHTML = hightScore;

const cols = Math.floor(board.clientWidth / blockWidth);
const rows = Math.floor(board.clientHeight / blockHeight);

const blocks = [];
let snake = [{ x: 1, y: 3 }];
let food = {
  x: Math.floor(Math.random() * rows),
  y: Math.floor(Math.random() * cols),
};
let intervalId = null;
let timeintervalId = null;

let direction = "down";

for (let row = 0; row < rows; row++) {
  for (let col = 0; col < cols; col++) {
    const block = document.createElement("div");
    block.classList.add("block");
    board.appendChild(block);

    blocks[`${row}-${col}`] = block;
  }
}

function render() {
  let head = null;

  blocks[`${food.x}-${food.y}`].classList.add("food");

  if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  }
  if (head.x < 0 || head.x >= rows || head.y < 0 || head.y >= cols) {
    clearInterval(intervalId);

    modal.style.display = "flex";
    startGame.style.display = "none";
    gameOver.style.display = "flex";

    return;
  }

  if (head.x == food.x && head.y == food.y) {
    blocks[`${food.x}-${food.y}`].classList.remove("food");
    food = {
      x: Math.floor(Math.random() * rows),
      y: Math.floor(Math.random() * cols),
    };
    blocks[`${food.x}-${food.y}`].classList.add("food");
    snake.unshift(head);

    score += 10;
    scoreElement.innerHTML = score;

    if (score > hightScore) {
      hightScore = score;
      localStorage.setItem("highScore", hightScore.toString());
    }
  }

  snake.forEach((element) => {
    blocks[`${element.x}-${element.y}`].classList.remove("fill");
  });

  snake.unshift(head);
  snake.pop();

  snake.forEach((element) => {
    blocks[`${element.x}-${element.y}`].classList.add("fill");
  });
}

startButton.addEventListener("click", () => {
  modal.style.display = "none";
  intervalId = setInterval(() => {
    render();
  }, 200);
  timeintervalId = setInterval(() => {
    let [min, sec] = time.split("-").map(Number);
    if (sec == 59) {
      min += 1;
      sec = 0;
    } else {
      sec += 1;
    }

    time = `${min}-${sec}`;
    timeElement.innerHTML = time;
  }, 1000);
});

restartBtn.addEventListener("click", restartGame);

function restartGame() {
  blocks[`${food.x}-${food.y}`].classList.remove("food");
  snake.forEach((element) => {
    blocks[`${element.x}-${element.y}`].classList.remove("fill");
  });

  score = 0;
  time = `00-00`;

  scoreElement.innerHTML = score;
  timeElement.innerHTML = time;
  highScoreElement.innerHTML = hightScore;
  modal.style.display = "none";
  direction = "down";


  snake = [{ x: 1, y: 3 }];
  food = {
    x: Math.floor(Math.random() * rows),
    y: Math.floor(Math.random() * cols),
  };
  intervalId = setInterval(() => {
    render();
  }, 200);
}

addEventListener("keydown", (event) => {
  if (event.key == "ArrowUp") {
    direction = "up";
  } else if (event.key == "ArrowRight") {
    direction = "right";
  } else if (event.key == "ArrowDown") {
    direction = "down";
  } else if (event.key == "ArrowLeft") {
    direction = "left";
  }
});

