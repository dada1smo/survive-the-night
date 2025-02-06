import { PlayerModel } from './PlayerModel';

export class GameModel {
  public player: PlayerModel;

  private nights: number = 0;

  constructor(player: PlayerModel) {
    this.player = player;
  }
}
