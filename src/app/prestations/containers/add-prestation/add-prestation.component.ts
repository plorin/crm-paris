import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(
    private prestationService: PrestationsService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  public add(item: Prestation) {
    console.log(item);
    this.prestationService.add(item);
    /*this.prestationService.add(item).subscribe((data) => {
      // exploite la réponse du serveur ici
    }); // subscribe va lancer la requête
    */
    this.router.navigate(['prestations']);
  }

}
