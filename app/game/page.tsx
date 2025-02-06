import GameArea from '@/components/ui/game-area';
import { CardPlaceType } from '@/types/CardPlaceType';
import { GameCardType } from '@/types/GameCardType';
import { v4 as uuidv4 } from 'uuid';

const cards: GameCardType[] = [
  { id: uuidv4(), title: 'Pistoleiro' },
  { id: uuidv4(), title: 'Espadachim' },
  { id: uuidv4(), title: 'Escopeta' },
];

const places: CardPlaceType[] = ['A', 'B', 'C'].map((col, row) => {
  return {
    id: `${col}${row + 1}`,
    col,
    row,
  };
});

export default function GamePage() {
  return <GameArea playerHand={cards} cardPlaces={places} />;
}
