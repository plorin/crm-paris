import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public user = 'Moi';
  public login$: BehaviorSubject<string> = new BehaviorSubject('logout');

  constructor() { }

  public login(): void {
    this.login$.next('login');
  }

  public logout(): void {
    this.login$.next('logout');
  }

}
