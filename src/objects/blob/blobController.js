import { Container } from "pixi.js";
import { Blob } from "./blob";

export class BlobController extends Container {
  constructor() {
    super();
    this.blobs = [];
    this.blobss = [];
    this.deltaTime = 1;
    this.spam();
  }
  spam() {
    this.blob = new Blob();
    this.addChild(this.blob);
    for (let i = 0; i < 4; i++) {
      let blobX = 130 + i * 70;
      let blobY = 50 + Math.floor(Math.random() * 81 + 23);
      let blob = this.blob.create(blobX, blobY);
      this.blobs.push(blob);
    }
    for (let j = 0; j < 4; j++) {
      let blobY = 130 + j * 70;
      let blobX = 50 + Math.floor(Math.random() * 81 + 23);
      let blob = this.blob.create(blobX, blobY);
      this.blobss.push(blob);
    }
  }
  move() {
    this.blobs.forEach((blob) => {
      blob.y += blob.velocityY;

      if (blob.y >= 450 || blob.y <= 30) {
        blob.velocityY *= -1;
      }
    });
    this.blobss.forEach((blob) => {
      blob.x += this.blob.velocityX;
      if (blob.x >= 450 || blob.x <= 30) {
        blob.velocityX *= -1;
      }
    });
  }
  update(deltaTime) {
    this.move();
  }
}
