import { v4 as uuidv4 } from 'uuid';
import { GameCardModel } from './GameCardModel';
import { CardPlaceModel } from './CardPlaceModel';
import { GameCardType } from '@/types/GameCardType';

export class PlayerModel {
  public id: string = uuidv4();

  public hand: GameCardModel[] = [];
  public placements: CardPlaceModel[] = [];

  constructor() {
    this.placements = ['A', 'B', 'C']
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
      .map(({ col, row }) => new CardPlaceModel(col, row, 'player'));
  }

  public findCardInHand(cardId: string) {
    return this.hand.find((card) => card.id === cardId);
  }

  public addCardToHand(cardName: GameCardType['name']) {
    const newCard = new GameCardModel(cardName);
    this.hand = [...this.hand, newCard];

    return this.hand;
  }

  public removeCardFromHand(cardId: string) {
    this.hand = this.hand.filter((card) => card.id !== cardId);
    return this.hand;
  }

  public addCardToPlacement(cardId: string, placeId: string) {
    const findCard = this.findCardInHand(cardId);

    this.removeCardFromHand(cardId);
    this.placements.map((place) => {
      if (place.id !== placeId) {
        return place;
      }

      return place.addCardToPlace(findCard);
    });

    return this;
  }
}
