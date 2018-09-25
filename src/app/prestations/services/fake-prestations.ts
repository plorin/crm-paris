import { State } from '../../shared/enums/state.enum';
import { Prestation } from '../../shared/models/prestation';

export const fakeprestations: Prestation[] = [
  new Prestation({
    id: 'a1',
    typePresta: 'Formation',
    client: 'Modis',
    nbJours: 2,
    tjmHT: 500,
    state: State.CONFIRME,
  }),
  new Prestation({
    id: 'b1',
    typePresta: 'Coaching',
    client: 'EduGroup',
    nbJours: 3,
    tjmHT: 550,
  })
];
