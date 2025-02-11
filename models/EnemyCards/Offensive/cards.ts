import { CardType } from '@/types/CardType';

export enum OffensiveEnemyCardNames {
  defaultZombie = 'defaultZombie',
}

export type OffensiveEnemyCardName = `${OffensiveEnemyCardNames}`;

export const offensiveEnemyCards: CardType[] = [
  {
    name: 'defaultZombie',
    title: 'Zumbi Padrão',
    health: 3,
    damage: 3,
    flavourText: 'É meio que só isso mesmo.',
    classification: 'offensive',
    affiliation: 'enemy',
    rarity: 1,
    level: 1,
  },
];
