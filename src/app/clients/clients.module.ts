import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LigneClientComponent } from './components/ligne-client/ligne-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    LigneClientComponent,
    ListClientsComponent,

  ]
})
export class ClientsModule { }
