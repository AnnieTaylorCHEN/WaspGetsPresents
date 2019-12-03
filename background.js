/****************************************************
 * background.js
 * 
 ****************************************************/

class Background {
  speed = 1;
  x = 0;
  y = 0;
  width = 800;
  height = 800;


  /****************************************************
   * Show the background by using the image() from p5,
   * which takes img, x, y and size
   * @custom
   ****************************************************/
  show() {
    image(backgroundImg, this.x, this.y, this.width, this.height);
  }


  /****************************************************
   * Background starts to the right of the canvas and
   * moves to the left
   * This function updates in draw()
   * @custom
   ****************************************************/
  update() {
    this.x -= this.speed;
    if (this.x + this.width <= CANVAS_WIDTH) {
      image(backgroundImg, this.x + this.width, 0, this.width, this.height);
      if (this.x <= -this.width) this.x = 0;
    }
  }
}