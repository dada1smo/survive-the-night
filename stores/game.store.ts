import { GameType } from '@/types/GameType';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { endTurn, initGame } from './methods/game';
import { addCardToPlacement } from './methods/placement';

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
          return {
            game: addCardToPlacement(get().game, 'player', cardId, placeId),
          };
        }),
      endTurn: () =>
        set(() => {
          return { game: endTurn(get().game) };
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
