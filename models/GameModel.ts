import { EnemyModel } from './EnemyModel';
import { PlayerModel } from './PlayerModel';

export class GameModel {
  public player: PlayerModel;
  public enemy: EnemyModel;

  public nightsSurvived: number = 0;

  public currentTurn: number = 1;

  constructor(player: PlayerModel, enemy: EnemyModel) {
    this.player = player;
    this.enemy = enemy;
  }

  public endTurn() {
    const playerPlacedCards = this.player.findPlacedCards();

    const update = this.enemy.autoPlaceCards(playerPlacedCards);

    this.enemy = update;

    this.currentTurn = this.currentTurn + 1;

    return this;
  }
}
