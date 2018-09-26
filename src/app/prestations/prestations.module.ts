import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LignePrestationComponent } from './components/ligne-prestation/ligne-prestation.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    FontAwesomeModule,
    RouterModule,
  ],
  declarations: [ListPrestationsComponent, LignePrestationComponent],
  exports: [],
})
export class PrestationsModule { }
