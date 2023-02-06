import { Application } from "pixi.js";

export default class Game {
  constructor() {
    this.app = new Application({
      width: 512,
      height: 512,
      backgroundColor: 0x1099bb,
      resolution: window.devicePixelRatio || 1,
    });
    document.body.appendChild(this.app.view);
  }
}
