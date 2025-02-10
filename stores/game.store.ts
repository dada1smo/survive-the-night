import { EnemyModel } from '@/models/EnemyModel';
import { GameModel } from '@/models/GameModel';
import { PlayerModel } from '@/models/PlayerModel';
import { CardNames } from '@/types/CardType';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

function initGame() {
  const playerCards: CardNames[] = ['gunslinger', 'swordsperson', 'brute'];
  const enemyCards: CardNames[] = ['defaultZombie'];

  const player = new PlayerModel();
  const enemy = new EnemyModel();
  const game = new GameModel(player, enemy);

  playerCards.forEach((name) => {
    game.player.addCardToHand(name);
  });

  enemyCards.forEach((name) => {
    game.enemy.addCardToHand(name);
  });

  return game;
}

interface GameState {
  game: GameModel;
  playCard: (cardId: string, placeId: string) => void;
  endTurn: () => void;
}

const useGameStore = create<GameState>()(
  persist(
    (set, get) => ({
      game: initGame(),
      playCard: (cardId: string, placeId: string) =>
        set(() => {
          get().game.player.addCardToPlacement(cardId, placeId);
          return { game: get().game };
        }),
      endTurn: () =>
        set(() => {
          get().game.endTurn();
          return { game: get().game };
        }),
    }),
    {
      name: 'survive-the-night',
    }
  )
);

export default useGameStore;
