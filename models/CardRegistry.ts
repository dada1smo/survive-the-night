import { CardType } from '@/types/CardType';
import {
  offensivePlayerCards,
  OffensivePlayerCardStats,
} from './PlayerCards/Offensive/cards';
import { offensiveEnemyCards } from './EnemyCards/Offensive/cards';

export const CardRegistry: Array<CardType | OffensivePlayerCardStats> = [
  ...offensivePlayerCards,
  ...offensiveEnemyCards,
];
