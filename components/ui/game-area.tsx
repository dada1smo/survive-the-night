'use client';

import { FunctionComponent, useId, useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import PlayerHand from './player-hand';
import PlayArea from './play-area';
import { CardPlaceType } from '@/types/CardPlaceType';
import { GameCardType } from '@/types/GameCardType';

interface GameAreaProps {
  playerHand: GameCardType[];
  cardPlaces: CardPlaceType[];
}

const GameArea: FunctionComponent<GameAreaProps> = ({
  playerHand,
  cardPlaces,
}) => {
  const id = useId();

  const [currentHand, setCurrentHand] = useState<GameCardType[]>(playerHand);
  const [currentPlacements, setCurrentPlacements] =
    useState<CardPlaceType[]>(cardPlaces);

  function handlePlayCard(cardId: string, placeId: string) {
    const findCard = currentHand.find((card) => card.id === cardId);
    setCurrentHand((prev) => prev.filter((card) => card.id !== cardId));
    setCurrentPlacements((prev) =>
      prev.map((place) => {
        if (place.id !== placeId) {
          return place;
        }

        return {
          ...place,
          placedCard: findCard,
        };
      })
    );
  }

  return (
    <DndContext id={id} onDragEnd={handleDragEnd}>
      <div className="flex">
        <div className="w-3/5 flex-1">
          <PlayArea places={currentPlacements} />
        </div>
        <div className="w-2/5 flex-initial">
          <PlayerHand hand={currentHand} />
        </div>
      </div>
    </DndContext>
  );

  function handleDragEnd(event: DragEndEvent) {
    if (event.over) {
      handlePlayCard(event.active.id as string, event.over.id as string);
    }
  }
};

export default GameArea;
