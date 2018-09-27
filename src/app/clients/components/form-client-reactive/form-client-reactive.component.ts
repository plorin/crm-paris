import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-client-reactive',
  templateUrl: './form-client-reactive.component.html',
  styleUrls: ['./form-client-reactive.component.scss']
})
export class FormClientReactiveComponent implements OnInit {
  public form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

  public process(): void {

  }
}
