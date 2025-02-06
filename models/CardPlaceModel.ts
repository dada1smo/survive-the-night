import { GameCardModel } from './GameCardModel';
export class CardPlaceModel {
  public id: string;
  public placedCard: undefined | GameCardModel;
  public col: string;
  public row: number;

  constructor(col: string, row: number) {
    this.col = col;
    this.row = row;
    this.id = `${col}${row}`;
  }

  public addCardToPlace(card?: GameCardModel) {
    this.placedCard = card;
    return this;
  }
}
