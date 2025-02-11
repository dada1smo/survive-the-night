import { CardType } from '@/types/CardType';
import { GameCardType } from '@/types/GameCardType';
import { buildFromRegistry } from './card';
import { produce } from 'immer';

export function initHand(cardNames: CardType['name'][]) {
  const hand: GameCardType[] = [];

  cardNames.forEach((name) => {
    const card = buildFromRegistry(name);
    hand.push(card);
  });

  return hand;
}

export function addCardToHand(
  hand: GameCardType[],
  cardName: CardType['name']
): GameCardType[] {
  const buildCard = buildFromRegistry(cardName);

  return produce(hand, (draft) => {
    draft.push(buildCard);
  });
}
