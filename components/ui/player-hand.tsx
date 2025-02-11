import { FunctionComponent } from 'react';
import HandCard from './hand-card';
import { GameCardType } from '@/types/GameCardType';

interface PlayerHandProps {
  hand: GameCardType[];
}

const PlayerHand: FunctionComponent<PlayerHandProps> = ({ hand }) => {
  return (
    <div className="flex gap-2">
      {hand.map((card, index) => (
        <HandCard key={index} gameCard={card} />
      ))}
    </div>
  );
};

export default PlayerHand;
