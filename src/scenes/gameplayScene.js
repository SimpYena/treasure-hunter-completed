import { Container } from "pixi.js";
import { Dungeon } from "../objects/dungeon";
import { Player } from "../objects/player";
import { BlobController } from "../objects/blob/blobController";
export class GamePlayScenes extends Container {
  constructor() {
    super();
    this.gameContainer = new Container();
    this.addChild(this.gameContainer);
    this.initDungeon();
  }

  initDungeon() {
    this.dungeon = new Dungeon();
    this.gameContainer.addChild(this.dungeon);
    this.initPlayer();
    this.initBlob();
  }
  initPlayer() {
    this.player = new Player();
    this.player.x = 50;
    this.player.y = 50;
    this.gameContainer.addChild(this.player);
  }
  initBlob() {
    this.blobs = new BlobController();
    this.gameContainer.addChild(this.blobs);
  }
  update(deltaTime) {
    this.blobs.update(deltaTime);
    this.deltaTime += deltaTime;
  }
}
