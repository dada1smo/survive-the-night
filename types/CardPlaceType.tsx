import { GameCardType } from './GameCardType';

export interface CardPlaceType {
  id: string;
  col: string;
  row: number;
  placedCard?: GameCardType;
}
