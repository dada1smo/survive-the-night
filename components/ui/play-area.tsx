import { FunctionComponent } from 'react';
import CardPlayArea from './card-play-area';
import { CardAffiliation } from '@/types/CardType';
import useGameStore from '@/stores/game.store';
import { CardPlaceType } from '@/types/CardPlaceType';
import { isInPlacement } from '@/stores/methods/card';

interface PlayAreaProps {
  affiliation: CardAffiliation;
}

const PlayArea: FunctionComponent<PlayAreaProps> = ({ affiliation }) => {
  const places = useGameStore((state) => state.game[affiliation].placements);
  const placedCards = useGameStore(
    (state) => state.game[affiliation].placedCards
  );

  const rows: { row: number; places: CardPlaceType[] }[] = [1, 2]
    .map((row) => {
      return {
        row,
        places: places.filter((place) => place.row === row),
      };
    })
    .sort((a, b) => {
      if (affiliation === 'enemy') {
        return b.row - a.row;
      }

      return a.row - b.row;
    });

  return (
    <div className="flex flex-col gap-2">
      {rows.map((row, index) => {
        return (
          <div key={index} className="flex gap-2">
            {row.places.map((place) => {
              return (
                <CardPlayArea
                  key={place.id}
                  place={place}
                  affiliation={affiliation}
                  placedCard={placedCards.find((card) => {
                    return isInPlacement(card, place.id);
                  })}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default PlayArea;
