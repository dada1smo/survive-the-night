import { CardType } from '@/types/CardType';
import { offensivePlayerCards } from './PlayerCards/Offensive/cards';
import { offensiveEnemyCards } from './EnemyCards/Offensive/cards';

export const CardRegistry: Array<CardType> = [
  ...offensivePlayerCards,
  ...offensiveEnemyCards,
];
