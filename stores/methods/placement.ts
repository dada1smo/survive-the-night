import { CardPlaceType } from '@/types/CardPlaceType';
import { CardAffiliation } from '@/types/CardType';

export function buildPlaceId(
  col: string,
  row: number,
  affiliation: CardAffiliation
) {
  return `${col}${row}-${affiliation}`;
}

export function initPlacements(affiliation: CardAffiliation): CardPlaceType[] {
  const placements = ['A', 'B', 'C']
    .flatMap((col) => {
      const row = 1;

      return [
        {
          col,
          row: row,
        },
        {
          col,
          row: row + 1,
        },
      ];
    })
    .map(({ col, row }) => {
      return { col, row, id: buildPlaceId(col, row, affiliation) };
    });

  return placements;
}
