import { CardPlaceType } from './CardPlaceType';
import { CardAffiliation } from './CardType';
import { GameCardType, PlacedGameCardType } from './GameCardType';

export interface BasePlayerType {
  id: string;
  hand: GameCardType[];
  placements: CardPlaceType[];
  placedCards: PlacedGameCardType[];
  affiliation: CardAffiliation;
}
