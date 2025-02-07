import { FunctionComponent } from 'react';
import CardPlace from './card-place';
import { useDroppable } from '@dnd-kit/core';
import HandCard from './hand-card';
import { CardPlaceModel } from '@/models/CardPlaceModel';

interface CardPlayAreaProps {
  place: CardPlaceModel;
}

const CardPlayArea: FunctionComponent<CardPlayAreaProps> = ({ place }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: place.id,
  });

  return (
    <CardPlace ref={setNodeRef} variant={isOver ? 'hovered' : 'default'}>
      {place.placedCard && (
        <HandCard card={place.placedCard} cardProps={{ size: 'played' }} />
      )}
    </CardPlace>
  );
};

export default CardPlayArea;
