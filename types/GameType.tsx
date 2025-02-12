import { CardAffiliation } from './CardType';
import { BasePlayerType } from './PlayerType';

export type GameAffiliationType = Record<CardAffiliation, BasePlayerType>;

export interface GameType extends GameAffiliationType {
  nightsSurvived: number;
  currentTurn: number;
}
