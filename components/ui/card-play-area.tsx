import { FunctionComponent } from 'react';
import CardPlace from './card-place';
import { useDroppable } from '@dnd-kit/core';
import { CardPlaceType } from '@/types/CardPlaceType';
import GameCard from './game-card';

interface CardPlayAreaProps {
  place: CardPlaceType;
}

const CardPlayArea: FunctionComponent<CardPlayAreaProps> = ({ place }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: place.id,
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };

  return (
    <CardPlace ref={setNodeRef} style={style}>
      {place.placedCard && <GameCard {...place.placedCard} />}
    </CardPlace>
  );
};

export default CardPlayArea;
