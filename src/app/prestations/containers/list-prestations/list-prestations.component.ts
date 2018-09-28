import { Component, OnInit, OnDestroy } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';
import { State } from '../../../shared/enums/state.enum';
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Row } from '../../../shared/interfaces/row';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  // public prestations: Prestation[]; // nous empêche d'utiliser ChangeDetectionStrategy.OnPush
  public prestations$: Observable<Prestation[]>;
  public listHeaders: string[];
  public faPlus = faPlus;
  public row: Row;
  // private sub: Subscription;
  constructor(
    private prestationService: PrestationsService
  ) { }

  ngOnDestroy() {
    // this.sub.unsubscribe(); // sinon on garde l'ancien et on ajoute un autre subscribe
  }
  ngOnInit() {
    this.prestations$ = this.prestationService.collection$;
    /*this.sub = this.prestationService.collection.subscribe((data) => {
      this.prestations = data;
    });*/
    this.listHeaders = [
      'Type',
      'Client',
      'Nb jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Action',
      'Delete',
    ];
    this.row = {
      route: 'add',
      icon: faPlusCircle,
      libelle: 'Ajouter une prestation',
    };
  }

}
