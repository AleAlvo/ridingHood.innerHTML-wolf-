/** @type {HTMLCanvasElement} */

class Player {
  constructor(ctx, x, y, speedX, speedY, color, up, down, left, right, sprite, wolfSprite) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.color = color;
    this.width = 20;
    this.height = 28;
    this.level = null;
    this.up = up;
    this.down = down;
    this.left = left;
    this.right = right;
    this.keys = {
      up: false,
      left: false,
      down: false,
      right: false,
    };
    this.lastKey = "";
    this.powerUp = false;
    this.powerUpTimer = 0;
    this.powerUpLimit = 420;
    this.frameX = 0;
    this.frameY = 0;
    this.sprite = sprite
    this.wolfSprite = wolfSprite;
  }

  reset() {
    this.powerUp = false;
    this.lastKey ="";
    this.powerUpTimer = 0;
    this.speedX = 0;
    this.speedY = 0;
  }

  draw() {
    if (this.powerUp) {
      if (this.lastKey === "a" || this.lastKey === "ArrowLeft" || this.lastKey === "s" || this.lastKey === "ArrowDown" || this.lastKey === "w" || this.lastKey === "ArrowUp") this.frameY = 28
      else if (this.lastKey === "d" || this.lastKey === "ArrowRight") this.frameY = 0
      this.drawSprite(this.wolfSprite, this.frameX, this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)
    } else {
      if (this.lastKey === "" || this.lastKey === "") this.frameY = 0
      else if (this.lastKey === "a" || this.lastKey === "ArrowLeft") this.frameY = 28
      else if (this.lastKey === "d" || this.lastKey === "ArrowRight") this.frameY = 56
      this.drawSprite(this.sprite, this.frameX, this.frameY, this.width, this.height, this.x, this.y, this.width, this.height)

    }
  }

  drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    this.ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
  }

  update() {
    this.draw();
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.powerUp) {
      if (this.powerUpTimer > this.powerUpLimit) {
        this.powerUpTimer = 0;
        this.powerUp = false;
        /* this.frameY = 0; */ //sprite image
      } else {
        this.powerUpTimer++;
      }
    }
  }
}

//animation
/*   topLimit(){
        return this.y;
    }

    bottomLimit(){
        return this.y + this.height;
    }

    leftLimit(){
        return this.x;
    }

    rightLimit(){
        return this.x + this.width;
    }
 */

class Finish {
  constructor(ctx, x, y, img) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 32;
    this.height = 32;
    this.img = img;
  }

  draw() {
    this.ctx.drawImage(this.img, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height)
  }
}



class PowerUp {
  constructor(ctx, x, y, img) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = 25;
    this.height = 25;
    this.img = img
    this.isOn = true;
  }


  draw() {
    if (this.isOn) {
      this.ctx.drawImage(this.img, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height)
    }
  }
}


