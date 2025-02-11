import { CardAffiliation, CardType } from '@/types/CardType';
import { GameType } from '@/types/GameType';
import { DefaultPlayer, initPlayer } from './player';
import { DefaultEnemy, initEnemy } from './enemy';
import { buildFromRegistry } from './card';
import { produce } from 'immer';

export const DefaultGame: GameType = {
  currentTurn: 1,
  nightsSurvived: 0,
  player: DefaultPlayer,
  enemy: DefaultEnemy,
};

export function initGame(data?: GameType): GameType {
  const game = {
    ...DefaultGame,
    player: initPlayer(),
    enemy: initEnemy(),
    ...data,
  };

  return game;
}

export function addCardToHand(
  game: GameType,
  affiliation: CardAffiliation,
  cardName: CardType['name']
) {
  const buildCard = buildFromRegistry(cardName);

  return produce(game, (draft) => {
    draft[affiliation].hand.push(buildCard);
  });
}
