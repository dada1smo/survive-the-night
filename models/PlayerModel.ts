import { v4 as uuidv4 } from 'uuid';
import { BasePlayerModel } from './BasePlayerModel';

export class PlayerModel extends BasePlayerModel {
  public id: string = uuidv4();

  constructor() {
    super('player');
  }
}
