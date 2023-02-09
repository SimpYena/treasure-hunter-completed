import { Container, Sprite, Texture } from "pixi.js";

export class Blob extends Container {
  constructor() {
    super();
  }
  create(blobX, blobY) {
    let texture = Texture.from("blob.png");
    this.blob = new Sprite(texture);
    this.blob.x = blobX;
    this.blob.y = blobY;
    this.blob.velocityY = 3;
    this.addChild(this.blob);

    return this.blob;
  }
}
