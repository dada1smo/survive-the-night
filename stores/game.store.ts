import { GameCardModel } from '@/models/GameCardModel';
import { GameModel } from '@/models/GameModel';
import { PlayerModel } from '@/models/PlayerModel';
import { create } from 'zustand';

function initGame() {
  const cards = [
    { title: 'Pistoleiro' },
    { title: 'Espadachim' },
    { title: 'Escopeta' },
  ];

  const player = new PlayerModel();
  const game = new GameModel(player);

  cards.forEach((card) => {
    const newCard = new GameCardModel(card.title);
    game.player.addCardToHand(newCard);
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
