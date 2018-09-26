import { Component, OnInit, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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

  constructor() {}

  ngOnInit() {}

  faBarsClicked() {
    this.open = ! this.open;
    console.log('faBarsClicked', this.open);
  }
}
