import { CardPlaceType } from '@/types/CardPlaceType';
import { CardAffiliation } from '@/types/CardType';
import { PlacedGameCardType } from '@/types/GameCardType';
import { GameType } from '@/types/GameType';
import { produce } from 'immer';

export function buildPlaceId(
  col: string,
  row: number,
  affiliation: CardAffiliation
) {
  return `${col}${row}-${affiliation}`;
}

export function initPlacements(affiliation: CardAffiliation): CardPlaceType[] {
  const placements = ['A', 'B', 'C']
    .flatMap((col) => {
      const row = 1;

      return [
        {
          col,
          row: row,
        },
        {
          col,
          row: row + 1,
        },
      ];
    })
    .map(({ col, row }) => {
      return { col, row, id: buildPlaceId(col, row, affiliation) };
    });

  return placements;
}

export function addCardToPlacement(
  game: GameType,
  affiliation: CardAffiliation,
  cardId: string,
  placeId: string
) {
  const findCard = game[affiliation].hand.find((card) => card.id === cardId);
  const findPlace = game[affiliation].placements.find(
    (place) => place.id === placeId
  );

  if (!findCard || !findPlace) {
    return game;
  }

  return produce(game, (draft) => {
    draft[affiliation].hand = draft[affiliation].hand.filter(
      (card) => card.id !== cardId
    );

    const placedCard: PlacedGameCardType = {
      ...findCard,
      placement: {
        isPlaced: true,
        ...findPlace,
      },
    };
    draft[affiliation].placedCards.push(placedCard);
    draft[affiliation].placements.filter(
      (place) => place.id === placeId
    )[0].placedCard = placedCard;
  });
}
