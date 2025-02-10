import { CardAffiliation, CardType } from '../types/CardType';
import { CardPlaceModel } from './CardPlaceModel';
import { GameCardModel } from './GameCardModel';

export class BasePlayerModel {
  public hand: GameCardModel[] = [];
  public placements: CardPlaceModel[] = [];
  public placedCards: GameCardModel[] = [];
  public affiliation: CardAffiliation;

  constructor(affiliation: CardAffiliation) {
    this.affiliation = affiliation;
    this.initPlacements(affiliation);
  }

  private initPlacements(affiliation: CardAffiliation) {
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
      .map(({ col, row }) => new CardPlaceModel(col, row, affiliation));

    return this.placements;
  }

  public findCardInHand(cardId: string) {
    return this.hand.find((card) => card.id === cardId);
  }

  public addCardToHand(cardName: CardType['name']) {
    const newCard = new GameCardModel(cardName);
    this.hand = [...this.hand, newCard];

    return this.hand;
  }

  public removeCardFromHand(cardId: string) {
    this.hand = this.hand.filter((card) => card.id !== cardId);
    return this.hand;
  }

  public addCardToPlacement(cardId: string, placeId: string) {
    if (
      this.placements.find((place) => place.id === placeId)?.placedCard?.id ===
      cardId
    ) {
      return this;
    }

    const findCard = this.findCardInHand(cardId);

    this.removeCardFromHand(cardId);
    this.placements.map((place) => {
      if (place.id !== placeId) {
        return place;
      }

      const placedCard = findCard?.setPlacement(place.col, place.row);
      this.placedCards = placedCard
        ? [...this.placedCards, placedCard]
        : this.placedCards;
      return place.addCardToPlace(placedCard);
    });

    return this;
  }

  public findPlacedCards(): GameCardModel[] | [] {
    const placedCards: GameCardModel[] = [];

    this.placements.forEach((place) => {
      if (place.placedCard) {
        placedCards.push(place.placedCard);
      }
    });

    return placedCards;
  }
}
