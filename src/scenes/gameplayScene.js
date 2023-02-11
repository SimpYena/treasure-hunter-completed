import { Container } from "pixi.js";
import { Dungeon } from "../objects/dungeon";
import { Player } from "../objects/player";
import { BlobController } from "../objects/blob/blobController";
import { Treasure } from "../objects/treasure";
import { Door } from "../objects/door";
import { CollisionDectect } from "../collide/collisiondetector";
import { GameOver } from "../UI/gameOver";
import { GameWin } from "../UI/gameWin";
import { HealthBar } from "../objects/healthbar";
import { Howl } from "howler";
export class GamePlayScenes extends Container {
  constructor() {
    super();
    this.gameContainer = new Container();
    this.addChild(this.gameContainer);
    this.collision = new CollisionDectect();
    this.initDungeon();
    this.initScenes();

    //sound chay khong binh thuong tren chrome, co luc chay luc khong chay
    // Bug: The AudioContext was not allowed to start. It must be resumed (or created) after a user gesture on the page
    // co luc chay rat binh thuong, chua hieu li do.
    this.soundbgr = new Howl({
      src: ["bgm.mp3"],
      html5: true,
      loop: true,
    });
    this.soundwin = new Howl({
      src: ["soundwin.mp3"],
      html5: true,
    });
    this.soundLose = new Howl({
      src: ["soundlose.mp3"],
      html5: true,
    });

    this.soundbgr.play();
  }
  initScenes() {
    this.initGameWin();
    this.initGameLose();
  }

  initDungeon() {
    this.dungeon = new Dungeon();
    this.gameContainer.addChild(this.dungeon);
    this.initPlayer();
    this.initBlob();
    this.initTreasure();
    this.initDoor();
    this.initHealthBar();
  }
  initPlayer() {
    this.player = new Player();
    this.player.move();
    this.player.x = 50;
    this.player.y = 50;
    this.gameContainer.addChild(this.player);
  }
  initBlob() {
    this.blobs = new BlobController();
    this.gameContainer.addChild(this.blobs);
  }
  initTreasure() {
    this.treasure = new Treasure();
    this.treasure.x = 400;
    this.treasure.y = 400;
    this.gameContainer.addChild(this.treasure);
  }
  initDoor() {
    this.door = new Door();
    this.door.x = 50;
    this.gameContainer.addChild(this.door);
  }
  initGameWin() {
    this.gameWin = new GameWin();
    this.gameWin.visible = false;
    this.addChild(this.gameWin);
  }
  initGameLose() {
    this.gameOver = new GameOver();
    this.gameOver.visible = false;
    this.addChild(this.gameOver);
  }
  initHealthBar() {
    this.healthBar = new HealthBar();
    this.healthBar.x = 200;
    this.addChild(this.healthBar);
  }

  update(deltaTime) {
    this.blobs.update(deltaTime);
    this.deltaTime += deltaTime;
    this.blobs.blobs.forEach((blob) => {
      if (this.collision.collisondetect(this.player, blob)) {
        this.healthBar.width -= 10;
        if (this.healthBar.width <= 0) {
          this.gameOver.visible = true;
          this.gameContainer.visible = false;
          this.soundbgr.stop();
          this.soundLose.play();
          this.removeChild(this.healthBar);
        }
      }
    });
    if (this.collision.collisondetect(this.player, this.treasure)) {
      this.player.velocityX = 10;
      this.player.velocityY = 10;
      this.treasure.x = this.player.x;
      this.treasure.y = this.player.y;
    }
    if (this.collision.collisondetect(this.treasure, this.door)) {
      this.gameWin.visible = true;
      this.gameContainer.visible = false;
      this.soundbgr.stop();
      this.soundLose.play();
    }
  }
}
