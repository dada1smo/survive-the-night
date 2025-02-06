'use client';

import { FunctionComponent, useId } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import PlayerHand from './player-hand';
import PlayArea from './play-area';
import useGameStore from '@/stores/game.store';

const GameArea: FunctionComponent = () => {
  const id = useId();

  const currentPlacements = useGameStore(({ game }) => game.player.placements);
  const currentHand = useGameStore(({ game }) => game.player.hand);
  const playCard = useGameStore((state) => state.playCard);

  return (
    <DndContext id={id} onDragEnd={handleDragEnd}>
      <div className="flex h-full">
        <div className="w-3/5 flex-1 flex flex-col justify-end items-center">
          <PlayArea places={currentPlacements} />
        </div>
        <div className="w-2/5 flex-initial flex flex-col justify-end items-end">
          <PlayerHand hand={currentHand} />
        </div>
      </div>
    </DndContext>
  );

  function handleDragEnd(event: DragEndEvent) {
    if (event.over) {
      playCard(event.active.id as string, event.over.id as string);
    }
  }
};

export default GameArea;
