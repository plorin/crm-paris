import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LigneClientComponent } from './components/ligne-client/ligne-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { RouterModule } from '@angular/router';
import { FormClientComponent } from './components/form-client/form-client.component';
import { FormClientReactiveComponent } from './components/form-client-reactive/form-client-reactive.component';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { EditClientComponent } from './containers/edit-client/edit-client.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  declarations: [
    LigneClientComponent,
    ListClientsComponent,
    FormClientComponent,
    FormClientReactiveComponent,
    AddClientComponent,
    EditClientComponent,

  ]
})
export class ClientsModule { }
