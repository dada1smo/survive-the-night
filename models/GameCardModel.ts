import {
  CardNames,
  CardAffiliation,
  CardClassification,
} from '@/types/CardType';
import { v4 as uuidv4 } from 'uuid';
import { CardRegistry } from './CardRegistry';

export class GameCardModel {
  public id: string = uuidv4();

  public name: string = '';
  public title: string = '';
  public health?: number = 0;
  public damage?: number;
  public flavourText: string = '';

  public currentHealth: number = 0;
  public currentDamage?: number;

  public classification?: CardClassification;
  public affiliation?: CardAffiliation;

  public isPlaced: boolean = false;
  public placementCol?: string;
  public placementRow?: number;

  constructor(cardName: CardNames) {
    const stats = this.getStats(cardName);
    this.name = stats.name;
    this.title = stats.title;
    this.flavourText = stats.flavourText;

    this.classification = stats.classification;
    this.affiliation = stats.affiliation;

    if ('damage' in stats) {
      this.health = stats.health;
      this.currentHealth = stats.damage;
    }

    if ('damage' in stats) {
      this.damage = stats.damage;
      this.currentDamage = stats.damage;
    }
  }

  public getStats(cardName: CardNames) {
    const findStats = CardRegistry.filter((card) => card.name === cardName);
    return findStats[0];
  }

  public setPlacement(col: string, row: number) {
    this.isPlaced = true;
    this.placementCol = col;
    this.placementRow = row;

    return this;
  }

  public isInPlacement(col: string, row: number) {
    if (this.placementCol === col && this.placementRow === row) {
      return true;
    }

    return false;
  }
}
