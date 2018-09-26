import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';
import { State } from '../../../shared/enums/state.enum';
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Row } from '../../../shared/interfaces/row';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  public prestations: Prestation[];
  public listHeaders: string[];
  public faPlus = faPlus;
  public row: Row;

  constructor(
    private prestationService: PrestationsService
  ) { }

  ngOnInit() {
    this.prestations = this.prestationService.collection;
    this.listHeaders = [
      'Type',
      'Client',
      'Nb jours',
      'Tjm HT',
      'Total HT',
      'Total TTC',
      'Action',
    ];
    this.row = {
      route: 'add',
      icon: faPlusCircle,
      libelle: 'Ajouter une prestation',
    };
  }

}
