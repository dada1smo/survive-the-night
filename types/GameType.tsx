import { BasePlayerType } from './PlayerType';

export interface GameType {
  nightsSurvived: number;
  currentTurn: number;
  enemy: BasePlayerType;
  player: BasePlayerType;
}
