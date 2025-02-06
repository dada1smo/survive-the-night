import { CardPlaceType } from '@/types/CardPlaceType';
import { FunctionComponent } from 'react';
import CardPlayArea from './card-play-area';

interface PlayAreaProps {
  places: CardPlaceType[];
}

const PlayArea: FunctionComponent<PlayAreaProps> = ({ places }) => {
  return (
    <div className="flex gap-2">
      {places.map((place) => {
        return <CardPlayArea key={place.id} place={place} />;
      })}
    </div>
  );
};

export default PlayArea;
