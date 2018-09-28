import { Component, OnInit, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginServiceService } from '../../../login/services/login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'mon CRM';
  public faBars = faBars;
  public faUser = faUser;
  public open = true;
  public connected = true;
  public user;
public log$;
  constructor(
    protected loginServiceService: LoginServiceService,
  ) {}

  ngOnInit() {
    this.user = this.loginServiceService.user;
    this.log$ = this.loginServiceService.login$;
  }

  faBarsClicked() {
    this.open = ! this.open;
    console.log('faBarsClicked', this.open);
  }

  public login() {
    this.loginServiceService.login();
  }
  public logout() {
    this.loginServiceService.logout();
  }
}
