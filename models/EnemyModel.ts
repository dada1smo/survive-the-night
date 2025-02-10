import { v4 as uuidv4 } from 'uuid';
import { BasePlayerModel } from './BasePlayerModel';
import { GameCardModel } from './GameCardModel';
import { buildPlaceId } from '@/lib/place';

export class EnemyModel extends BasePlayerModel {
  public id: string = uuidv4();

  constructor() {
    super('enemy');
  }

  public autoPlaceCards(playerCards: GameCardModel[]) {
    if (!playerCards.length) {
      return this;
    }

    this.addCardToPlacement(
      this.hand[0].id,
      buildPlaceId(
        playerCards[0].placementCol || '',
        playerCards[0].placementRow || 0,
        this.affiliation
      )
    );

    return this;
  }
}
