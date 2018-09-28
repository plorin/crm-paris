import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { Prestation } from '../../../shared/models/prestation';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
public prestation: Prestation;

  constructor(
    private route: ActivatedRoute,
    private prestationService: PrestationsService,
    private router: Router,
  ) { }

  ngOnInit() {
    // console.log(this.route);
    this.route.data.subscribe(data => {
      console.log(data);
      this.prestation = new Prestation(data.prestation);
    });
  }
  public update(item: Prestation) {
    console.log(item);
    this.prestationService
      .update(item)
      .then((data) => {
      console.log(data);
    }
    );
    /*this.prestationService.add(item).subscribe((data) => {
      // exploite la réponse du serveur ici
    }); // subscribe va lancer la requête
    */
    this.router.navigate(['prestations']);
  }
}
