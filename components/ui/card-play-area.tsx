import { FunctionComponent } from 'react';
import CardPlace from './card-place';
import { useDroppable } from '@dnd-kit/core';
import { CardPlaceType } from '@/types/CardPlaceType';
import HandCard from './hand-card';

interface CardPlayAreaProps {
  place: CardPlaceType;
}

const CardPlayArea: FunctionComponent<CardPlayAreaProps> = ({ place }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: place.id,
  });

  return (
    <CardPlace ref={setNodeRef} variant={isOver ? 'hovered' : 'default'}>
      {place.placedCard && <HandCard card={place.placedCard} />}
    </CardPlace>
  );
};

export default CardPlayArea;
