import { OffensiveEnemyCardName } from '@/models/EnemyCards/Offensive/cards';
import { OffensivePlayerCardName } from '@/models/PlayerCards/Offensive/cards';

export type GameCardClassification = 'offensive' | 'support';
export type GameCardAffiliation = 'player' | 'enemy';

export type CardNames = OffensivePlayerCardName | OffensiveEnemyCardName;

export interface GameCardType {
  name: CardNames;
  title: string;
  flavourText: string;
  classification: GameCardClassification;
  affiliation: GameCardAffiliation;
}
