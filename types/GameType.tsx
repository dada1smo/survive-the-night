import { BasePlayerType } from './PlayerType';

export interface Game {
  nightsSurvived: number;
  currentTurn: number;
  enemy: BasePlayerType;
  player: BasePlayerType;
}
