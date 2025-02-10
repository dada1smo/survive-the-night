import { buildPlaceId } from '@/lib/place';
import { GameCardAffiliation } from '../types/CardType';
import { GameCardModel } from './GameCardModel';
export class CardPlaceModel {
  public id: string;
  public placedCard: undefined | GameCardModel;
  public col: string;
  public row: number;

  constructor(col: string, row: number, affiliation: GameCardAffiliation) {
    this.col = col;
    this.row = row;
    this.id = buildPlaceId(col, row, affiliation);
  }

  public addCardToPlace(card?: GameCardModel) {
    this.placedCard = card;
    return this;
  }
}
