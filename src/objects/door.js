import { Container, Texture, Sprite } from "pixi.js";
export class Door extends Container {
  constructor() {
    super();
    this.create();
  }

  create() {
    const texture = Texture.from("door.png");
    this.door = new Sprite(texture);
    this.addChild(this.door);
  }
}
