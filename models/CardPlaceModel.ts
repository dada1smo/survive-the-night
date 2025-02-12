import { buildPlaceId } from '@/stores/methods/placement';
import { GameCardModel } from './GameCardModel';
import { CardAffiliation } from '@/types/CardType';
export class CardPlaceModel {
  public id: string;
  public placedCard: undefined | GameCardModel;
  public col: string;
  public row: number;

  constructor(col: string, row: number, affiliation: CardAffiliation) {
    this.col = col;
    this.row = row;
    this.id = buildPlaceId(col, row, affiliation);
  }

  public addCardToPlace(card?: GameCardModel) {
    this.placedCard = card;
    return this;
  }
}
