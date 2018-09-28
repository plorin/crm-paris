import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Prestation } from '../../shared/models/prestation';
import { PrestationsService } from './prestations.service';
import { Observable, EMPTY } from 'rxjs';
import { take, mergeMap, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ResolverService implements Resolve<Prestation> {

  constructor(
    private prestationService: PrestationsService,
    private router: Router,
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Prestation> | any {
    const id = route.paramMap.get('id');
    return this.prestationService.getPrestation(id).pipe(
      tap(data => console.log(data) ), // permet de récupérer data pour voir ce qu'il y a dedans
      take(1),
      map(data => {
        console.log('map', data);
        if (data) {
          console.log('map', data);
          return data; // {...data, id: id};
        } else {
          console.log('pas de prestation !');
          this.router.navigate(['/prestations']);
          return null;
        }
      })
    );
  }
}
