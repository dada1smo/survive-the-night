import { BasePlayerType } from '@/types/PlayerType';
import { v4 as uuidv4 } from 'uuid';
import { initPlacements } from './placement';
import { CardNames } from '@/types/CardType';
import { initHand } from './hand';

export const DefaultPlayer: BasePlayerType = {
  id: uuidv4(),
  hand: [],
  placements: initPlacements('player'),
  placedCards: [],
  affiliation: 'player',
};

export function initPlayer(data?: BasePlayerType): BasePlayerType {
  const playerCards: CardNames[] = ['gunslinger', 'swordsperson', 'brute'];
  const hand = initHand(playerCards);

  return { ...DefaultPlayer, hand, ...data };
}
