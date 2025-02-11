import { OffensiveEnemyCardName } from '@/models/EnemyCards/Offensive/cards';
import { OffensivePlayerCardName } from '@/models/PlayerCards/Offensive/cards';

export type CardClassification = 'offensive' | 'support';
export type CardAffiliation = 'player' | 'enemy';

export type CardNames = OffensivePlayerCardName | OffensiveEnemyCardName;

export interface CardType {
  name: CardNames;
  title: string;
  flavourText: string;
  classification: CardClassification;
  affiliation: CardAffiliation;
  rarity: number;
  level: number;
  health: number;
  damage: number;
}
