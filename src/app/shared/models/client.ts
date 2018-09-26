import { ClientsI } from '../interfaces/clients-i';
import { StateClient } from '../enums/stateClient.enum';

export class Client implements ClientsI {
  id: string;
  name: string;
  email: string;
  tel: string;
  contact: string;
  state: StateClient;

  constructor(fields?: Partial<Client>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
