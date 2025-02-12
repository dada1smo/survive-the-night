import { BasePlayerType } from '@/types/PlayerType';
import { v4 as uuidv4 } from 'uuid';
import { addCardToPlacement, buildPlaceId, initPlacements } from './placement';
import { CardNames } from '@/types/CardType';
import { initHand } from './hand';
import { GameType } from '@/types/GameType';

export const DefaultEnemy: BasePlayerType = {
  id: uuidv4(),
  hand: [],
  placements: initPlacements('enemy'),
  placedCards: [],
  affiliation: 'enemy',
};

export function initEnemy(data?: BasePlayerType): BasePlayerType {
  const enemyCards: CardNames[] = ['defaultZombie'];
  const hand = initHand(enemyCards);

  return { ...DefaultEnemy, hand, ...data };
}

export function playEnemyTurn(game: GameType) {
  if (!game.player.placedCards.length) {
    return game;
  }

  const update = addCardToPlacement(
    game,
    'enemy',
    game.enemy.hand[0].id,
    buildPlaceId(
      game.player.placedCards[0].placement.col,
      game.player.placedCards[0].placement.row,
      'enemy'
    )
  );

  return update;
}
