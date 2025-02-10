import { OffensivePlayerCardStats } from '@/models/PlayerCards/Offensive/cards';
import { CardType } from './CardType';
import { OffensiveEnemyCardStats } from '@/models/EnemyCards/Offensive/cards';

export interface GameCardPlacementType {
  isPlaced: boolean;
  col: string;
  row: number;
}

export interface GameCardCurrentStatsType {
  damage: number;
  health: number;
}

export interface GameCardType extends CardType {
  id: string;
  card: OffensivePlayerCardStats | OffensiveEnemyCardStats;
  currentStats: GameCardCurrentStatsType;
}

export interface PlacedGameCardType extends GameCardType {
  placement: GameCardPlacementType;
}
