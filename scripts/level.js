/** @type {HTMLCanvasElement} */

class Level {
  constructor(ctx, width, height, redPlayer, ylwPlayer, map, name, color) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.redPlayer = redPlayer;
    this.ylwPlayer = ylwPlayer;
    this.boundaries = [];
    this.map = map;
    this.name = name;
    this.color = color;
    this.powerUpsArr = [];
  }

  createBoundaries() {
    this.redPlayer.x = 35;
    this.redPlayer.y = 202;
    this.ylwPlayer.x = 35;
    this.ylwPlayer.y = 250;

    const image1 = new Image();
    image1.src = "./docs/assets/forest.png";
    const image2 = new Image();
    image2.src = "./docs/assets/rock.png";
    const image3 = new Image();
    image3.src = "./docs/assets/well.png";
    const image4 = new Image();
    image4.src = "./docs/assets/wheat.png";
    const image5 = new Image();
    image5.src = "./docs/assets/house1.png";
    const image6 = new Image();
    image6.src = "./docs/assets/house2.png";
    const image7 = new Image();
    image7.src = "./docs/assets/house3.png";
    const image8 = new Image();
    image8.src = "./docs/assets/house4.png";
    const image9 = new Image();
    image9.src = "./docs/assets/house5.png";
    const image10 = new Image();
    image10.src = "./docs/assets/snow_rock.png";
    const image11 = new Image();
    image11.src = "./docs/assets/river_top.png";
    const image12 = new Image();
    image12.src = "./docs/assets/river_vert.png";
    const image13 = new Image();
    image13.src = "./docs/assets/river_bot.png";
    const image14 = new Image();
    image14.src = "./docs/assets/river_left.png";
    const image15 = new Image();
    image15.src = "./docs/assets/river_horiz.png";
    const image16 = new Image();
    image16.src = "./docs/assets/river_right.png";
    for (let row = 0; row < this.map.length; row++) {
      for (let column = 0; column < this.map[row].length; column++) {
        if (this.map[row][column] === 1) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image1));
        } else if (this.map[row][column] === 2) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image2));
        } else if (this.map[row][column] === 3) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image3));
        } else if (this.map[row][column] === 4) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image4));
        } else if (this.map[row][column] === 5) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image5));
        } else if (this.map[row][column] === 6) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image6));
        } else if (this.map[row][column] === 7) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image7));
        } else if (this.map[row][column] === 8) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image8));
        } else if (this.map[row][column] === 9) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image9));
        } else if (this.map[row][column] === 10) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image10));
        } else if (this.map[row][column] === 11) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image11));
        } else if (this.map[row][column] === 12) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image12));
        } else if (this.map[row][column] === 13) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image13));
        } else if (this.map[row][column] === 14) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image14));
        } else if (this.map[row][column] === 15) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image15));
        } else if (this.map[row][column] === 16) {
          let x = 32 * column;
          let y = 32 * row;
          this.boundaries.push(new Boundary(ctx, x, y, image16));
        } 
        
      }
    }
  }

  

  /* startLevel(){
        function animate() {
    requestAnimationFrame(animate);
    } */
}
