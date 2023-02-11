import { Container, Text } from "pixi.js";
import { HealthBar } from "../objects/healthbar";

export class GameWin extends Container {
  constructor() {
    super();
    this.createText();
  }
  createText() {
    this.healthBar = new HealthBar();
    let text = new Text("GAME OVER \n" + "Score:" + this.healthBar.width);
    text.anchor.set(0.5);
    text.x = 512 / 2;
    text.y = 512 / 2;
    this.addChild(text);
  }
}
F;
