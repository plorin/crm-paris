import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../../../shared/models/client';
import { StateClient } from '../../../shared/enums/stateClient.enum';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-ligne-client, [app-ligne-client]',
  templateUrl: './ligne-client.component.html',
  styleUrls: ['./ligne-client.component.scss']
})
export class LigneClientComponent implements OnInit {
  public states = Object.values(StateClient);
  @Input() client: Client;

  constructor(
    private clientService: ClientsService,
  ) { }

  ngOnInit() {
    if (!this.client) {
      this.client = new Client();
    }
  }

  public changeState(event) {
    const state = event.target.value;
    this.clientService.update(this.client, state);
  }

}
