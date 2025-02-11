import { FunctionComponent } from 'react';
import GameCard, { GameCardProps } from './game-card';
import { useDraggable } from '@dnd-kit/core';
import { GameCardType } from '@/types/GameCardType';

interface HandCardProps {
  gameCard: GameCardType;
  cardProps?: GameCardProps;
}

const HandCard: FunctionComponent<HandCardProps> = ({
  gameCard,
  cardProps,
}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: gameCard.id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <GameCard
      {...cardProps}
      title={gameCard.card.title}
      health={gameCard.card.health}
      damage={gameCard.card.damage}
      flavourText={gameCard.card.flavourText}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    />
  );
};

export default HandCard;
