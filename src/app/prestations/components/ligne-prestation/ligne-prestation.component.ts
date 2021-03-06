import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { State } from '../../../shared/enums/state.enum';
import { PrestationsService } from '../../services/prestations.service';
import { faTrash, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ligne-prestation, [app-ligne-prestation]',
  /* en utilisant la syntaxe suivante
  selector: '[app-ligne-prestation]',
  on utilise dans le html :
  <tr app-ligne-prestation [prestation]="item" *ngFor="let item of prestations"></tr>
  au lieu d'avoir 2 balises imbriquées comme ci-dessous :
  <tr *ngFor="let item of prestations">
    <app-ligne-prestation [prestation]="item"></app-ligne-prestation>
  </tr>
  */
  templateUrl: './ligne-prestation.component.html',
  styleUrls: ['./ligne-prestation.component.scss']
})
export class LignePrestationComponent implements OnInit {
  public states = Object.values(State);
  public faTrash = faTrashAlt;

  @Input() prestation: Prestation;

  constructor(
    private prestationService: PrestationsService,
    private router: Router,
    ) {
    // console.log('constructor', this.prestation);
  }

  ngOnInit() {
    console.log('ngOnInit', this.prestation);
    if (!this.prestation) {
      this.prestation = new Prestation();
    }
  }

  public changeState(event) {
    const state = event.target.value;
    console.log('changeState', event, state);
    this.prestationService.update(this.prestation, state).then((data) => {
      console.log(state);
      this.prestation.state = state; // pour mettre à jour l'ihm
      const msg = 'Super, prestation ' + state;
      this.prestationService.msg$.next(msg);
    });
    /*this.prestationService.update(this.prestation, state).subscribe((data) => {
      this.prestation.state = state; // pour mettre à jour l'ihm
    });*/
  }

  public deleteMe(): void {
    const lib = this.prestation.client;
    this.prestationService.delete(this.prestation).then((data) => {
      this.prestationService.msg$.next('Prestation supprimée ' + lib);
    });
  }

  public edit(): void {
    const routeStr = 'prestations/edit/' + this.prestation.id;
    console.log(routeStr);
    this.router.navigate([routeStr]);
  }
}
