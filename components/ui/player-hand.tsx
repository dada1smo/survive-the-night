import { FunctionComponent } from 'react';
import HandCard from './hand-card';
import { GameCardModel } from '@/models/GameCardModel';

interface PlayerHandProps {
  hand: GameCardModel[];
}

const PlayerHand: FunctionComponent<PlayerHandProps> = ({ hand }) => {
  return (
    <div className="flex gap-2">
      {hand.map((card, index) => (
        <HandCard key={index} card={card} />
      ))}
    </div>
  );
};

export default PlayerHand;
