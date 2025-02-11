import { BasePlayerType } from '@/types/PlayerType';
import { v4 as uuidv4 } from 'uuid';
import { initPlacements } from './placement';
import { CardNames } from '@/types/CardType';
import { initHand } from './hand';

export const DefaultEnemy: BasePlayerType = {
  id: uuidv4(),
  hand: [],
  placements: initPlacements('enemy'),
  placedCards: [],
  affiliation: 'enemy',
};

export function initEnemy(data?: BasePlayerType): BasePlayerType {
  const enemyCards: CardNames[] = ['defaultZombie'];
  const hand = initHand(enemyCards);

  return { ...DefaultEnemy, hand, ...data };
}
