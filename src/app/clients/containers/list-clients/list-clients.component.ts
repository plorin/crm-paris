import { Component, OnInit } from '@angular/core';
import { Client } from '../../../shared/models/client';
import { faPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { Row } from '../../../shared/interfaces/row';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  public clients: Client[];
  public listHeaders: string[];
  public faPlus = faPlus;
  public row: Row;
  constructor(
    private clientService: ClientsService
  ) { }

  ngOnInit() {
    this.clients = this.clientService.collection;
    this.listHeaders = [
      'Nom',
      'Email',
      'Tél',
      'Contact',
      'Action',
    ];
    this.row = {
      route: 'add',
      icon: faPlusCircle,
      libelle: 'Ajouter un client',
    };
  }

}
