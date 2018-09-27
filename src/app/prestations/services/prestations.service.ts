import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/prestation';
import { fakeprestations } from './fake-prestations';
import { State } from '../../shared/enums/state.enum';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Plus besoin de créer de dépendances
})
export class PrestationsService {
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  // items: Observable<Prestation[]>;
  private _collection: Observable<Prestation[]>;

  constructor(
    private afs: AngularFirestore,
    private http: HttpClient
  ) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this._collection = this.itemsCollection
      .valueChanges()
      .pipe(map(data => data.map(presta => new Prestation(presta))));
    // ou
    /*this._collection = this.itemsCollection.valueChanges().pipe(
      map((data) => {
        console.log('dans valueChanges', data);
        const tab = [];
        data.forEach((presta) => {
          tab.push(new Prestation(presta));
        });
        return tab;
      })
    )*/
    // this._collection = fakeprestations; // il va automatiquement appeler le setter

    // this.http.get<Prestation[]>('url_api/prestations'); // url_api à récupérer dans un fichier d'environnement
  }

  // get collection
  get collection(): Observable<Prestation[]> {
    return this._collection;
  }

  // set collection
  set collection(col: Observable<Prestation[]>) {
    this._collection = col;
  }

  // get item in collection by id
  getItem(id: string): Prestation {
    /*this._collection.find(
      prest => prest.id === id
    );*/
    return null;
  }

  // add presta
  add(item: Prestation): any {
    const id = this.afs.createId(); // ajoute un doc en BDD
    const prestation = { id, ...item };
    return this.itemsCollection
      .doc(id)
      .set(prestation)
      .catch(e => {
        console.log(e);
      });
    // return this.http.post('urlapi/prestations', item);
  }

  update(item: Prestation, option?: State): Promise<any> {
    const presta = { ...item }; // const presta = item ne va pas car c'est une copie par référence
    if (option) {
      presta.state = option;
    }
    return this.itemsCollection
      .doc(item.id)
      .update(presta)
      .catch(e => {
        console.log(e);
      });
    // return this.http.patch('urlapi/prestations/'+item.id, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection
      .doc(item.id)
      .delete()
      .catch(e => {
        console.log(e);
      });
    // return this.http.delete(`urlapi/prestations/${item.id}`);
  }

  // delete
  // delete(prest: Prestation): void {}

  // public update(prestation: Prestation, state: State) {
  //   prestation.state = state;
  // }


}
