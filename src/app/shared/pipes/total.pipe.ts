import { Pipe, PipeTransform } from '@angular/core';
import { Prestation } from '../models/prestation';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Prestation, typeTotal: string = 'HT'): number {
    if (value) { // important dans le cas ou on a un pb de connexion avec la BDD
      switch (typeTotal) {
        case 'HT' :
          return value.totalHT();
        case 'TTC' :
          return value.totalTTC();
      }
    }
    return 0;
  }

}
