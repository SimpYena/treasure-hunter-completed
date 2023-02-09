import { Assets, Container, Sprite, Texture } from "pixi.js";

export class Dungeon extends Container {
  constructor() {
    super();
    this.create();
  }

  create() {
    const texture = Texture.from("dungeon.png");
    this.dungeon = new Sprite(texture);
    this.addChild(this.dungeon);
  }
}
