import { Container, Sprite, Texture } from "pixi.js";
import { Keyboard } from "../input/keyboard";

export class Player extends Container {
  constructor() {
    super();
    this.create();
    this.velocityX = 20;
    this.velocityY = 20;
  }
  create() {
    const texture = Texture.from("player.png");
    this.player = new Sprite(texture);
    this.addChild(this.player);
  }
  move() {
    const left = Keyboard.control("ArrowLeft"),
      up = Keyboard.control("ArrowUp"),
      right = Keyboard.control("ArrowRight"),
      down = Keyboard.control("ArrowDown");

    //Left

    left.press = () => {
      this.x -= this.velocityX;
      if (this.x <= -20) {
        this.x = -20;
      }
    };

    //Up
    up.press = () => {
      this.y -= this.velocityY;
      if (this.y <= -20) {
        this.y = -20;
      }
    };

    //Right
    right.press = () => {
      this.x += this.velocityX;
      if (this.x >= 400) {
        this.x = 400;
      }
    };

    //Down
    down.press = () => {
      this.y += this.velocityY;
      if (this.y >= 400) {
        this.y = 400;
      }
    };
  }
}
