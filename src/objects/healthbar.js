import { Container, Texture, Sprite } from "pixi.js";

export class HealthBar extends Container {
  constructor() {
    super();
    this.create();
  }

  create() {
    const texture = Texture.from("healthBar.png");
    this.healthBar = new Sprite(texture);
    this.healthBar.width = 300;
    this.addChild(this.healthBar);
  }
}
