import { GameCardType } from '@/types/GameCardType';

export enum OffensivePlayerCardNames {
  gunslinger = 'gunslinger',
  swordsperson = 'swordsperson',
  brute = 'brute',
}

export type OffensivePlayerCardName = `${OffensivePlayerCardNames}`;

export interface OffensivePlayerCardStats extends GameCardType {
  name: OffensivePlayerCardName;
  health: number;
  damage: number;
}

export const offensivePlayerCards: OffensivePlayerCardStats[] = [
  {
    name: 'gunslinger',
    title: 'Pistoleiro',
    health: 4,
    damage: 4,
    flavourText: 'Portador de armas de fogo.',
    classification: 'offensive',
    affiliation: 'player',
  },
  {
    name: 'swordsperson',
    title: 'Espadachim',
    health: 5,
    damage: 3,
    flavourText: 'Se garante com um facão.',
    classification: 'offensive',
    affiliation: 'player',
  },
  {
    name: 'brute',
    title: 'Brutamontes',
    health: 7,
    damage: 2,
    flavourText: 'Não costuma malhar perna.',
    classification: 'offensive',
    affiliation: 'player',
  },
];
