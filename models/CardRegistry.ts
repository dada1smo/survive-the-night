import { GameCardType } from '@/types/GameCardType';
import {
  offensivePlayerCards,
  OffensivePlayerCardStats,
} from './PlayerCards/Offensive/cards';
import { offensiveEnemyCards } from './EnemyCards/Offensive/cards';

export const CardRegistry: Array<GameCardType | OffensivePlayerCardStats> = [
  ...offensivePlayerCards,
  ...offensiveEnemyCards,
];
