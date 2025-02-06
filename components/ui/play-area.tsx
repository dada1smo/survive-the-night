import { CardPlaceType } from '@/types/CardPlaceType';
import { FunctionComponent } from 'react';
import CardPlayArea from './card-play-area';

interface PlayAreaProps {
  places: CardPlaceType[];
}

const PlayArea: FunctionComponent<PlayAreaProps> = ({ places }) => {
  const rows = places.reduce((acc: CardPlaceType[][], item) => {
    acc[item.row] = acc[item.row] || [];
    acc[item.row].push(item);
    return acc;
  }, []);

  return (
    <div className="flex flex-col gap-2">
      {rows.map((row, index) => {
        return (
          <div key={index} className="flex gap-2">
            {row.map((place) => {
              return <CardPlayArea key={place.id} place={place} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PlayArea;
