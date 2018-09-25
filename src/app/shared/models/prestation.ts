import { PrestationsI } from '../interfaces/prestations-i';
import { State } from '../enums/state.enum';

export class Prestation implements PrestationsI {
  id: string;
  typePresta: string;
  client: string;
  nbJours = 0;
  tjmHT = 0;
  tauxTVA = 20;
  state = State.OPTION;

  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  public totalHT(): number {
    console.log('total HT called');
    return this.nbJours * this.tjmHT;
  }

  public totalTTC(tvaTaux?: number): number {
    console.log('total TTC called');
    if (!tvaTaux) {
      tvaTaux = this.tauxTVA;
    }
    if (tvaTaux <= 0) {
      return this.totalHT();
    }
    return this.totalHT() * (1 + (tvaTaux / 100));
  }
}
