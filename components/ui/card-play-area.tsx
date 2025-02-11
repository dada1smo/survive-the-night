import { FunctionComponent } from 'react';
import CardPlace from './card-place';
import { useDroppable } from '@dnd-kit/core';
import HandCard from './hand-card';
import { CardAffiliation } from '@/types/CardType';
import { GameCardType } from '@/types/GameCardType';
import { CardPlaceType } from '@/types/CardPlaceType';

interface CardPlayAreaProps {
  place: CardPlaceType;
  affiliation: CardAffiliation;
  placedCard?: GameCardType;
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
        <HandCard gameCard={placedCard} cardProps={{ size: 'played' }} />
      )}
    </CardPlace>
  );
};

export default CardPlayArea;
