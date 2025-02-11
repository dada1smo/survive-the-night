import { GameType } from '@/types/GameType';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { initGame } from './methods/game';
import { addCardToPlacement } from './methods/player';

// function initGame() {
//   const playerCards: CardNames[] = ['gunslinger', 'swordsperson', 'brute'];
//   const enemyCards: CardNames[] = ['defaultZombie'];

//   const player = new PlayerModel();
//   const enemy = new EnemyModel();
//   const game = new GameModel(player, enemy);

//   playerCards.forEach((name) => {
//     game.player.addCardToHand(name);
//   });

//   enemyCards.forEach((name) => {
//     game.enemy.addCardToHand(name);
//   });

//   return game;
// }

interface GameState {
  game: GameType;
  playCard: (cardId: string, placeId: string) => void;
  endTurn: () => void;
  clearGame: () => void;
}

const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      game: initGame(),
      playCard: (cardId: string, placeId: string) =>
        set(() => {
          const update = addCardToPlacement(get().game, cardId, placeId);
          return { game: update };
        }),
      endTurn: () =>
        set(() => {
          // get().game.endTurn();
          return { game: get().game };
        }),
      clearGame: () =>
        set(() => {
          return { game: initGame() };
        }),
    }),
    {
      name: 'survive-the-night',
    }
  )
);

export default useGameStore;
