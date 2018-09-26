import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { LignePrestationComponent } from './components/ligne-prestation/ligne-prestation.component';

const appRoutes: Routes = [
  { path: '', component: ListPrestationsComponent },
  { path: 'add', component: LignePrestationComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ],
  declarations: []
})
export class PrestationsRoutingModule { }
