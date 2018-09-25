import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
import { fakeprestations } from './fake-prestations';

@Injectable({
  providedIn: 'root' // Plus besoin de créer de dépendances
})
export class PrestationsService {
  private _collection: Prestation[];

  constructor() {
    this._collection = fakeprestations; // il va automatiquement appeler le setter
  }

  // get collection
  get collection(): Prestation[] {
    return this._collection;
  }

  // set collection
  set collection(col: Prestation[]) {
    this._collection = col;
  }

  // get item in collection by id
  getItem(id: string): Prestation {
    this._collection.find(
      prest => prest.id === id
    );
    return null;
  }

  // update

  // delete
  delete(prest: Prestation): void {
    
  }

}