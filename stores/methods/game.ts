import { GameType } from '@/types/GameType';
import { DefaultPlayer, initPlayer } from './player';
import { DefaultEnemy, initEnemy, playEnemyTurn } from './enemy';
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

export function endTurn(game: GameType) {
  const update = playEnemyTurn(game);

  return produce(update, (draft) => {
    draft.currentTurn = draft.currentTurn + 1;
  });
}
