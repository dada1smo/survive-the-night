import useGameStore from '@/stores/game.store';
import { FunctionComponent } from 'react';
import { Button } from './button';

const GameInfo: FunctionComponent = () => {
  const nightsSurvived = useGameStore(({ game }) => game.nightsSurvived);

  const currentTurn = useGameStore(({ game }) => game.currentTurn);

  const endTurn = useGameStore((state) => state.endTurn);

  const clearGame = useGameStore((state) => state.clearGame);

  return (
    <div className="flex flex-col gap-2">
      <div>Noites passadas: {nightsSurvived}</div>
      <div>Turno: {currentTurn}</div>
      <Button onClick={endTurn}>Encerrar turno</Button>
      <Button onClick={clearGame}>Limpar jogo</Button>
    </div>
  );
};

export default GameInfo;
