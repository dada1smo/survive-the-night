import { FunctionComponent } from 'react';
import GameCard, { GameCardProps } from './game-card';
import { useDraggable } from '@dnd-kit/core';
import { GameCardModel } from '@/models/GameCardModel';

interface HandCardProps {
  card: GameCardModel;
  cardProps?: GameCardProps;
}

const HandCard: FunctionComponent<HandCardProps> = ({ card, cardProps }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <GameCard
      {...cardProps}
      title={card.title}
      health={card.health}
      damage={card.damage}
      flavourText={card.flavourText}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    />
  );
};

export default HandCard;
