import { FunctionComponent } from 'react';
import GameCard from './game-card';
import { useDraggable } from '@dnd-kit/core';
import { GameCardModel } from '@/models/GameCardModel';

interface HandCardProps {
  card: GameCardModel;
}

const HandCard: FunctionComponent<HandCardProps> = ({ card }) => {
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
      title={card.title}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    />
  );
};

export default HandCard;
