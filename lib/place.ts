import { GameCardAffiliation } from '@/types/CardType';

export function buildPlaceId(
  col: string,
  row: number,
  affiliation: GameCardAffiliation
) {
  return `${col}${row}-${affiliation}`;
}
