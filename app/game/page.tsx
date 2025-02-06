import GameArea from '@/components/ui/game-area';
import { CardPlaceType } from '@/types/CardPlaceType';
import { GameCardType } from '@/types/GameCardType';
import { v4 as uuidv4 } from 'uuid';

const cards: GameCardType[] = [
  { id: uuidv4(), title: 'Pistoleiro' },
  { id: uuidv4(), title: 'Espadachim' },
  { id: uuidv4(), title: 'Escopeta' },
];

const places: CardPlaceType[] = ['A', 'B', 'C'].flatMap((col) => {
  const row = 1;

  return [
    {
      id: `${col}${row}`,
      col,
      row: row,
    },
    {
      id: `${col}${row + 1}`,
      col,
      row: row + 1,
    },
  ];
});

export default function GamePage() {
  return <GameArea playerHand={cards} cardPlaces={places} />;
}
