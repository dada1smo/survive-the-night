import { GameCardType } from '@/types/GameCardType';

export enum OffensiveEnemyCardNames {
  defaultZombie = 'defaultZombie',
}

export type OffensiveEnemyCardName = `${OffensiveEnemyCardNames}`;

export interface OffensiveEnemyCardStats extends GameCardType {
  name: OffensiveEnemyCardName;
  health: number;
  damage: number;
}

export const offensiveEnemyCards: OffensiveEnemyCardStats[] = [
  {
    name: 'defaultZombie',
    title: 'Zumbi Padrão',
    health: 3,
    damage: 3,
    flavourText: 'É meio que só isso mesmo.',
    classification: 'offensive',
    affiliation: 'enemy',
  },
];
