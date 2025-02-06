import { v4 as uuidv4 } from 'uuid';

export class GameCardModel {
  public id: string = uuidv4();

  public title: string;

  constructor(title: string) {
    this.title = title;
  }
}
