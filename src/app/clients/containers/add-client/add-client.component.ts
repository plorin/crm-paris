import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from '../../../shared/models/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(
    private clientService: ClientsService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public add(item: Client) {
    console.log(item);
    this.clientService.add(item);
    this.router.navigate(['clients']);
  }
}
