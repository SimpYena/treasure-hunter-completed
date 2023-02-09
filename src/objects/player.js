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
      this.player.x -= this.velocityX;
      if (this.player.x <= -20) {
        this.player.x = -20;
      }
    };

    //Up
    up.press = () => {
      this.player.y -= this.velocityY;
      if (this.player.y <= -20) {
        this.player.y = -20;
      }
    };

    //Right
    right.press = () => {
      this.player.x += this.velocityX;
      if (this.player.x >= 400) {
        this.player.x = 400;
      }
    };

    //Down
    down.press = () => {
      this.player.y += this.velocityY;
      if (this.player.y >= 400) {
        this.player.y = 400;
      }
    };
  }
}
