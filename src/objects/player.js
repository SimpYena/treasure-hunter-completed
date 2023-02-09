import { Container, Sprite, Texture } from "pixi.js";

export class Player extends Container {
  constructor() {
    super();
    this.create();
  }
  create() {
    const texture = Texture.from("player.png");
    this.player = new Sprite(texture);
    this.addChild(this.player);
  }
}
