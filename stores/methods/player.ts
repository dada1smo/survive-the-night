import { BasePlayerType } from '@/types/PlayerType';
import { v4 as uuidv4 } from 'uuid';
import { initPlacements } from './placement';
import { CardNames } from '@/types/CardType';
import { initHand } from './hand';
import { GameType } from '@/types/GameType';
import { produce } from 'immer';
import { PlacedGameCardType } from '@/types/GameCardType';

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

export function addCardToPlacement(
  game: GameType,
  cardId: string,
  placeId: string
) {
  const findCard = game.player.hand.find((card) => card.id === cardId);
  const findPlace = game.player.placements.find(
    (place) => place.id === placeId
  );

  if (!findCard || !findPlace) {
    return game;
  }

  return produce(game, (draft) => {
    draft.player.hand = draft.player.hand.filter((card) => card.id !== cardId);

    const placedCard: PlacedGameCardType = {
      ...findCard,
      placement: {
        isPlaced: true,
        ...findPlace,
      },
    };
    draft.player.placedCards.push(placedCard);
    draft.player.placements.filter(
      (place) => place.id === placeId
    )[0].placedCard = placedCard;
  });
}
