import { StateClient } from '../enums/stateClient.enum';

export interface ClientsI {
  id: string;
  name: string;
  email: string;
  tel: string;
  contact: string;
  state: StateClient;
}
