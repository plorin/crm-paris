import { Client } from '../../shared/models/client';
import { StateClient } from '../../shared/enums/stateClient.enum';


export const fakeclients: Client[] = [
  new Client({
    id: 'a1',
    name: 'name1',
    email: 'email@email.com',
    tel: '0112',
    contact: 'contact',
    state: StateClient.ACTIF
  }),
  new Client({
    id: 'c2',
    name: 'name2',
    email: 'email@email.com',
    tel: '0112',
    contact: 'contact',
    state: StateClient.INACTIF
  })
];
