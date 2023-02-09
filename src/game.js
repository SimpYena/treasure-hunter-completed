import { Application, Container } from "pixi.js";
import { GamePlayScenes } from "./scenes/gameplayScene";

export default class Game {
  constructor() {
    this.app = new Application({
      width: 512,
      height: 512,
      backgroundColor: 0x1099bb,
      resolution: window.devicePixelRatio || 1,
    });
    document.body.appendChild(this.app.view);
    this.gameContainer = new Container();
    this.app.stage.addChild(this.gameContainer);
    this.app.ticker.add(this.update, this);
    this.initGameScene();
  }
  initGameScene() {
    this.gameScene = new GamePlayScenes();
    this.gameContainer.addChild(this.gameScene);
  }
  update(deltaTime) {
    this.gameScene.update(deltaTime);
  }
}
