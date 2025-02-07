import { GameModel } from '@/models/GameModel';
import { PlayerModel } from '@/models/PlayerModel';
import { CardNames } from '@/types/GameCardType';
import { create } from 'zustand';

function initGame() {
  const cards: CardNames[] = ['gunslinger', 'swordsperson', 'brute'];

  const player = new PlayerModel();
  const game = new GameModel(player);

  cards.forEach((name) => {
    game.player.addCardToHand(name);
  });

  return game;
}

interface GameState {
  game: GameModel;
  playCard: (cardId: string, placeId: string) => void;
}

const useGameStore = create<GameState>((set) => ({
  game: initGame(),
  playCard: (cardId: string, placeId: string) =>
    set((state) => {
      state.game.player.addCardToPlacement(cardId, placeId);
      return { game: state.game };
    }),
}));

export default useGameStore;
