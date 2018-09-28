import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { ResolverService } from './services/resolver.service';

const appRoutes: Routes = [
  { path: '', component: ListPrestationsComponent },
  { path: 'add', component: AddPrestationComponent },
  {
    path: 'edit/:id',
    component: EditPrestationComponent,
    resolve: {
      prestation: ResolverService
    }
    // data: { id:  }
  },
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
