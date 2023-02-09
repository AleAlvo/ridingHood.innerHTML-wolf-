/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const forestButton = document.getElementById("forest-button");
const cityButton = document.getElementById("city-button");
const mountainButton = document.getElementById("mountain-button");
const newGameButton = document.getElementById("new-game-button");
const ylwScore = document.getElementById("YellowScore");
const redScore = document.getElementById("RedScore");
const rules = document.getElementById("rules");
let ylwCount = 0;
let redCount = 0;


//--------------------------------------------------------------CREATING COMPONENTS

ctx.fillStyle = "#b7c8b7";
ctx.fillRect(0, 0, canvas.width, canvas.height);

//----------------------------------PLAYERS
const redSprite = new Image()
redSprite.addEventListener("load", ()=> {})
redSprite.src = "./docs/assets/red_sprite.png"

const redWolfSprite = new Image()
redWolfSprite.addEventListener("load", ()=> {})
redWolfSprite.src = "./docs/assets/red_wolf_sprite.png"

const ylwSprite = new Image()
ylwSprite.addEventListener("load", ()=> {})
ylwSprite.src = "./docs/assets/ylw_sprite.png"

const ylwWolfSprite = new Image()
ylwWolfSprite.addEventListener("load", ()=> {})
ylwWolfSprite.src = "./docs/assets/ylw_wolf_sprite.png"

const redPlayer = new Player(ctx, 35, 202, 0, 0, "red", "w", "s", "a", "d", redSprite, redWolfSprite);
redPlayer.update();

const ylwPlayer = new Player(ctx, 35, 250, 0, 0, "yellow", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight",ylwSprite, ylwWolfSprite);
ylwPlayer.update();

//----------------------------------LEVELS
const level1 = new Level(ctx, canvas.width, canvas.height, redPlayer, ylwPlayer, map1, "forest", "#75b565");
const level2 = new Level(ctx, canvas.width, canvas.height, redPlayer, ylwPlayer, map2, "city", "#bdbdbd");
const level3 = new Level(ctx, canvas.width, canvas.height, redPlayer, ylwPlayer, map3, "mountain", "#5e5e5c");

let currentLevel = [];




//----------------------------------GRANDMA'S HOUSE

const grandmaImg = new Image()
grandmaImg.addEventListener("load", ()=> {})
grandmaImg.src = "./docs/assets/grandma_house.png"

const grandmaHouse = new Finish(ctx, 1216, 224, grandmaImg);
grandmaHouse.draw();

//----------------------------------POWER UPS

const poisonImg = new Image()
poisonImg.addEventListener("load", ()=> {})
poisonImg.src = "./docs/assets/poison.png"
let redPoison1 = null;
let redPoison2 = null;

//--------------------------------------------------------------TIMER FUNCTION

function countdown() {
  if (framesX >= 0 && framesX < 60) {
    const img = new Image();
    img.src = "./docs/assets/3.png";
    ctx.drawImage(img, canvas.width / 2 - 175, canvas.height / 2 - 175);
  } else if (framesX >= 60 && framesX < 120) {
    const img = new Image();
    img.src = "./docs/assets/2.png";
    ctx.drawImage(img, canvas.width / 2 - 175, canvas.height / 2 - 175);
  } else if (framesX >= 120 && framesX < 180) {
    const img = new Image();
    img.src = "./docs/assets/1.png";
    ctx.drawImage(img, canvas.width / 2 - 175, canvas.height / 2 - 175);
  } else if (framesX >= 180 && framesX < 240) {
    const img = new Image();
    img.src = "./docs/assets/go.png";
    ctx.drawImage(img, canvas.width / 2 - 175, canvas.height / 2 - 175);
  }
}

//--------------------------------------------------------------CHECKING COLLISIONS

function checkCollision({ hitbox, object }) {
  return (
    hitbox.y + hitbox.speedY <= object.y + object.height &&
    hitbox.x + hitbox.width + hitbox.speedX >= object.x &&
    hitbox.y + hitbox.height + hitbox.speedY >= object.y &&
    hitbox.x + hitbox.speedX <= object.x + object.width
  );
}

//--------------------------------------------------------------PLAYER MOVEMENT WITH ALLOWED MOVEMENT PREDICTION

function playerMove(player) {
  if (!player.powerUp) {
    if (player.keys.up && player.lastKey === player.up) {
      for (let i = 0; i < currentLevel.boundaries.length; i++) {
        const boundary = currentLevel.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedY: -2 },
            object: boundary,
          })
        ) {
          player.speedY = 0;
          break;
        } else player.speedY = -2;
      }
    } else if (player.keys.left && player.lastKey === player.left) {
      for (let i = 0; i < currentLevel.boundaries.length; i++) {
        const boundary = currentLevel.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedX: -2 },
            object: boundary,
          })
        ) {
          player.speedX = 0;
          break;
        } else player.speedX = -2;
      }
    } else if (player.keys.down && player.lastKey === player.down) {
      for (let i = 0; i < currentLevel.boundaries.length; i++) {
        const boundary = currentLevel.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedY: 2 },
            object: boundary,
          })
        ) {
          player.speedY = 0;
          break;
        } else player.speedY = 2;
      }
    } else if (player.keys.right && player.lastKey === player.right) {
      for (let i = 0; i < currentLevel.boundaries.length; i++) {
        const boundary = currentLevel.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedX: 2 },
            object: boundary,
          })
        ) {
          player.speedX = 0;
          break;
        } else player.speedX = 2;
      }
    }
  } else {
    if (player.keys.up && player.lastKey === player.up) {
      for (let i = 0; i < currentLevel.boundaries.length; i++) {
        const boundary = currentLevel.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedY: -3 },
            object: boundary,
          })
        ) {
          player.speedY = 0;
          break;
        } else player.speedY = -3;
      }
    } else if (player.keys.left && player.lastKey === player.left) {
      for (let i = 0; i < currentLevel.boundaries.length; i++) {
        const boundary = currentLevel.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedX: -3 },
            object: boundary,
          })
        ) {
          player.speedX = 0;
          break;
        } else player.speedX = -3;
      }
    } else if (player.keys.down && player.lastKey === player.down) {
      for (let i = 0; i < currentLevel.boundaries.length; i++) {
        const boundary = currentLevel.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedY: 3 },
            object: boundary,
          })
        ) {
          player.speedY = 0;
          break;
        } else player.speedY = 3;
      }
    } else if (player.keys.right && player.lastKey === player.right) {
      for (let i = 0; i < currentLevel.boundaries.length; i++) {
        const boundary = currentLevel.boundaries[i];
        if (
          checkCollision({
            hitbox: { ...player, speedX: 3 },
            object: boundary,
          })
        ) {
          player.speedX = 0;
          break;
        } else player.speedX = 3;
      }
    }
  }
}

//--------------------------------------------------------------ANIMATING
let animationId;
let framesX = 0;
function animate() {
  animationId = requestAnimationFrame(animate);
  framesX++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = currentLevel.color;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //---------MOVING PLAYERS

  playerMove(redPlayer);
  playerMove(ylwPlayer);
  if (framesX % 10 === 0) {
    redPlayer.frameX = (redPlayer.frameX + 20) % 160;
  }
  if (framesX % 10 === 0) {
    ylwPlayer.frameX = (ylwPlayer.frameX + 20) % 160;
  }
  redPlayer.update();
  ylwPlayer.update();

//---------DRAWING ELEMENTS

  grandmaHouse.draw();
  currentLevel.powerUpsArr.forEach((element) => {
    element.draw();
  });

  //---------STOPING PLAYERS ON FULL WALL COLLISION

  currentLevel.boundaries.forEach((boundary) => {
    boundary.draw();
    if (
      checkCollision({
        hitbox: redPlayer,
        object: boundary,
      })
    ) {
      redPlayer.speedX = 0;
      redPlayer.speedY = 0;
    }

    if (
      checkCollision({
        hitbox: ylwPlayer,
        object: boundary,
      })
    ) {
      ylwPlayer.speedX = 0;
      ylwPlayer.speedY = 0;
    }
  });
  countdown();

  //---------POWER UP COLLISION

  if (
    checkCollision({ hitbox: redPlayer, object: currentLevel.powerUpsArr[0] }) ||
    checkCollision({ hitbox: redPlayer, object: currentLevel.powerUpsArr[1] })
  ) {
    powerUpMusic.play();
    redPlayer.powerUp = true;
    currentLevel.powerUpsArr[0].isOn = false;
    currentLevel.powerUpsArr[1].isOn = false;
  }

  if (
    checkCollision({ hitbox: ylwPlayer, object: currentLevel.powerUpsArr[0] }) ||
    checkCollision({ hitbox: ylwPlayer, object: currentLevel.powerUpsArr[1] })
  ) {
    powerUpMusic.play();
    ylwPlayer.powerUp = true;
    currentLevel.powerUpsArr[0].isOn = false;
    currentLevel.powerUpsArr[1].isOn = false;
  }

  //---------PLAYER COLLISION

  if (checkCollision({ hitbox: ylwPlayer, object: redPlayer })) {
    if (ylwPlayer.powerUp && redPlayer.powerUp) {

      cancelAnimationFrame(animationId);
      winMusic.play();
      forestMusic.pause();
      cityMusic.pause();
      
      const drawScreen = new Image();
      drawScreen.src = "./docs/assets/draw_screen.png";
      drawScreen.onload = () => ctx.drawImage(drawScreen, 340, 115);
      redPlayer.reset();
      ylwPlayer.reset();
    }
    if (ylwPlayer.powerUp || redPlayer.powerUp) {
      
      cancelAnimationFrame(animationId);
      winMusic.play();
      forestMusic.pause();
      cityMusic.pause();

      if (ylwPlayer.powerUp && !redPlayer.powerUp) {
        const ylwWins = new Image();
        ylwWins.src = "./docs/assets/ylw_wolf_wins.png";
        ylwWins.onload = () => ctx.drawImage(ylwWins, 340, 115);
        ylwCount ++;
        ylwScore.innerHTML = `${ylwCount}`;

      } else if (redPlayer.powerUp && !ylwPlayer.powerUp) {
        const redWins = new Image();
        redWins.src = "./docs/assets/red_wolf_wins.png";
        redWins.onload = () => ctx.drawImage(redWins, 340, 115);
        redCount ++;
        redScore.innerHTML = `${redCount}`;
      }
      redPlayer.reset();
      ylwPlayer.reset();
    }
  }

  //---------GRANDMA'S HOUSE COLLISION

  if (
    checkCollision({ hitbox: redPlayer, object: grandmaHouse }) && !redPlayer.powerUp) {
      
      cancelAnimationFrame(animationId);
      winMusic.play();
      forestMusic.pause();
      cityMusic.pause();
      const redWins = new Image();
      redWins.src = "./docs/assets/red_wins.png";
      redWins.onload = () => ctx.drawImage(redWins, 340, 115);
      redCount ++;
      redScore.innerHTML = `${redCount}`;
      redPlayer.reset();
      ylwPlayer.reset();
  }

  if (
    checkCollision({ hitbox: ylwPlayer, object: grandmaHouse }) && !ylwPlayer.powerUp ) {
      
      cancelAnimationFrame(animationId);
      winMusic.play();
      forestMusic.pause();
      cityMusic.pause();
      const ylwWins = new Image();
      ylwWins.src = "./docs/assets/ylw_wins.png";
      ylwWins.onload = () => ctx.drawImage(ylwWins, 340, 115);
      ylwCount ++;
      ylwScore.innerHTML = `${ylwCount}`;
      redPlayer.reset();
      ylwPlayer.reset();
  }
}

//--------------------------------------------------------------START BUTTON FUNCTION

forestButton.onclick = function () {
  currentLevel = level1
  redPoison1 = new PowerUp(ctx, 736, 163, poisonImg);
  redPoison1.draw();
  redPoison2 = new PowerUp(ctx, 868, 420, poisonImg);
  redPoison2.draw();
  currentLevel.powerUpsArr.push(redPoison1, redPoison2);
  currentLevel.createBoundaries();
  setTimeout(() => {
    startGameMusic.play()
  }, 3000);
  forestMusic.play();
  canvas.classList.toggle("hidden");
  cityButton.classList.toggle("hidden");
  forestButton.classList.toggle("hidden");
  mountainButton.classList.toggle("hidden");
  newGameButton.classList.toggle("hidden");
  rules.classList.toggle("hidden");
  framesX = 0;
  animate();
}


cityButton.onclick = function () {
  currentLevel = level2
  redPoison1 = new PowerUp(ctx, 513, 234, poisonImg);
  redPoison1.draw();
  redPoison2 = new PowerUp(ctx, 962, 234, poisonImg);
  redPoison2.draw();
  currentLevel.powerUpsArr.push(redPoison1, redPoison2);
  currentLevel.createBoundaries();
  setTimeout(() => {
    startGameMusic.play()
  }, 3000);
  cityMusic.play();
  canvas.classList.toggle("hidden");
  cityButton.classList.toggle("hidden");
  forestButton.classList.toggle("hidden");
  mountainButton.classList.toggle("hidden");
  newGameButton.classList.toggle("hidden");
  rules.classList.toggle("hidden");
  framesX = 0;
  animate();
}

mountainButton.onclick = function () {
  currentLevel = level3
  redPoison1 = new PowerUp(ctx, 32, 32, poisonImg);
  redPoison1.draw();
  redPoison2 = new PowerUp(ctx, 32, 420, poisonImg);
  redPoison2.draw();
  currentLevel.powerUpsArr.push(redPoison1, redPoison2);
  currentLevel.createBoundaries();
  setTimeout(() => {
    startGameMusic.play()
  }, 3000);
  mountainMusic.play();
  canvas.classList.toggle("hidden");
  cityButton.classList.toggle("hidden");
  forestButton.classList.toggle("hidden");
  mountainButton.classList.toggle("hidden");
  newGameButton.classList.toggle("hidden");
  rules.classList.toggle("hidden");
  framesX = 0;
  animate();
}

newGameButton.onclick = function () {
  canvas.classList.toggle("hidden");
  cityButton.classList.toggle("hidden");
  forestButton.classList.toggle("hidden");
  mountainButton.classList.toggle("hidden");
  newGameButton.classList.toggle("hidden");
  rules.classList.toggle("hidden");
  forestMusic.pause()
  cityMusic.pause();
  mountainMusic.pause();
  currentLevel.powerUpsArr = [];
  currentLevel = [];
  framesX = 0;
  cancelAnimationFrame(animationId);

}



  

  /*audioCtx.currententTime = 0;*/
  /* const audioCtx = new Audio("../docs/assets/Audio/MainSoundGame.mp3") //Audio
  console.log(audioCtx)
  audioCtx.play(); */

 /*  let audioStart = document.getElementById("start-button");
  audioStart.addEventListener('click', playSound);
}; 

const playSound = () => {
  audioStart.play();
}; */

//--------------------------------------------------------------EVENT LISTENERS

window.addEventListener("keydown", (event) => {
  if (framesX > 180) {
    switch (event.key) {
      case "w":
        redPlayer.keys.up = true;
        redPlayer.lastKey = "w";
        break;
      case "a":
        redPlayer.keys.left = true;
        redPlayer.lastKey = "a";
        break;
      case "s":
        redPlayer.keys.down = true;
        redPlayer.lastKey = "s";
        break;
      case "d":
        redPlayer.keys.right = true;
        redPlayer.lastKey = "d";
        break;
      case "ArrowUp":
        ylwPlayer.keys.up = true;
        ylwPlayer.lastKey = "ArrowUp";
        break;
      case "ArrowLeft":
        ylwPlayer.keys.left = true;
        ylwPlayer.lastKey = "ArrowLeft";
        break;
      case "ArrowDown":
        ylwPlayer.keys.down = true;
        ylwPlayer.lastKey = "ArrowDown";
        break;
      case "ArrowRight":
        ylwPlayer.keys.right = true;
        ylwPlayer.lastKey = "ArrowRight";
        break;
    }
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "w":
      redPlayer.keys.up = false;
      break;
    case "a":
      redPlayer.keys.left = false;
      break;
    case "s":
      redPlayer.keys.down = false;
      break;
    case "d":
      redPlayer.keys.right = false;
      break;
    case "ArrowUp":
      ylwPlayer.keys.up = false;
      break;
    case "ArrowLeft":
      ylwPlayer.keys.left = false;
      break;
    case "ArrowDown":
      ylwPlayer.keys.down = false;
      break;
    case "ArrowRight":
      ylwPlayer.keys.right = false;
      break;
  }
});
