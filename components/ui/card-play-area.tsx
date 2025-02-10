import { FunctionComponent } from 'react';
import CardPlace from './card-place';
import { useDroppable } from '@dnd-kit/core';
import HandCard from './hand-card';
import { CardPlaceModel } from '@/models/CardPlaceModel';
import { CardAffiliation } from '@/types/CardType';
import { GameCardModel } from '@/models/GameCardModel';

interface CardPlayAreaProps {
  place: CardPlaceModel;
  affiliation: CardAffiliation;
  placedCard?: GameCardModel;
}

const CardPlayArea: FunctionComponent<CardPlayAreaProps> = ({
  place,
  affiliation,
  placedCard,
}) => {
  const { isOver, setNodeRef } = useDroppable({
    id: place.id,
    disabled: affiliation === 'enemy',
  });

  return (
    <CardPlace ref={setNodeRef} variant={isOver ? 'hovered' : 'default'}>
      {placedCard && (
        <HandCard card={placedCard} cardProps={{ size: 'played' }} />
      )}
    </CardPlace>
  );
};

export default CardPlayArea;
