import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LigneClientComponent } from './components/ligne-client/ligne-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';

const appRoutes: Routes = [
  { path: '', component: ListClientsComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ],
  declarations: []
})
export class ClientsRoutingModule { }
