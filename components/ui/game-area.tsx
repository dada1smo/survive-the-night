'use client';

import { FunctionComponent, useId } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import PlayerHand from './player-hand';
import PlayArea from './play-area';
import useGameStore from '@/stores/game.store';
import GameInfo from './game-info';

const GameArea: FunctionComponent = () => {
  const id = useId();

  const currentPlayerHand = useGameStore(({ game }) => game.player.hand);
  const playCard = useGameStore((state) => state.playCard);

  return (
    <DndContext id={id} onDragEnd={handleDragEnd}>
      <div className="flex h-full">
        <div className="w-3/5 flex-1 flex flex-col justify-between items-center">
          <PlayArea affiliation="enemy" />
          <PlayArea affiliation="player" />
        </div>
        <div className="w-2/5 flex-initial flex flex-col justify-between items-end">
          <GameInfo />
          <PlayerHand hand={currentPlayerHand} />
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
