import { Injectable } from '@angular/core';
import { Client } from '../../shared/models/client';
import { StateClient } from '../../shared/enums/stateClient.enum';
import { fakeclients } from './fake-clients';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  _collection: Client[];

  constructor() {
    this._collection = fakeclients; // il va automatiquement appeler le setter
   }

  get collection(): Client[] {
    return this._collection;
  }

  set collection(clients: Client[]) {
    this._collection = clients;
  }

  public update(client: Client, state: StateClient) {
    client.state = state;
  }
}
