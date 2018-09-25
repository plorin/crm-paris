import { State } from '../enums/state.enum';

export interface PrestationsI {
  id: string;
  typePresta: string;
  client: string;
  nbJours: number;
  tjmHT: number;
  tauxTVA: number;
  state: State;
}
