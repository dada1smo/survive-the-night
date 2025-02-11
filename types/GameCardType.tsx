import { CardType } from './CardType';

export interface GameCardPlacementType {
  isPlaced: boolean;
  id: string;
  col: string;
  row: number;
}

export interface GameCardCurrentStatsType {
  damage: number;
  health: number;
}

export interface GameCardType {
  id: string;
  card: CardType;
  currentStats: GameCardCurrentStatsType;
}

export interface PlacedGameCardType extends GameCardType {
  placement: GameCardPlacementType;
}
