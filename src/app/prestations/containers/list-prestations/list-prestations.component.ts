import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { Observable } from 'rxjs';
import { PrestationsService } from '../../services/prestations.service';
import { State } from '../../../shared/enums/state.enum';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  public prestations: Prestation[];
  public states = Object.values(State);

  constructor(
    private prestationService: PrestationsService
  ) { }

  ngOnInit() {
    this.prestations = this.prestationService.collection;
  }

}
