import { CardRegistry } from '@/models/CardRegistry';
import { CardNames } from '@/types/CardType';
import {
  GameCardCurrentStatsType,
  GameCardType,
  PlacedGameCardType,
} from '@/types/GameCardType';
import { v4 as uuidv4 } from 'uuid';

export function findInRegistry(cardName: CardNames) {
  const findStats = CardRegistry.filter((card) => card.name === cardName);
  return findStats[0];
}

export function getCurrentStats(
  damage?: number,
  health?: number
): GameCardCurrentStatsType {
  return {
    damage: damage || 0,
    health: health || 0,
  };
}

export function buildFromRegistry(cardName: CardNames): GameCardType {
  const find = findInRegistry(cardName);

  return {
    id: uuidv4(),
    card: find,
    currentStats: getCurrentStats(find.damage || 0, find.health),
  };
}

export function isInPlacement(card: PlacedGameCardType, id: string) {
  if (card.placement.id === id) {
    return true;
  }

  return false;
}
