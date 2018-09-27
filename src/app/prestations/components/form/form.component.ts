import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { Prestation } from '../../../shared/models/prestation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public states = Object.values(State);
  public newPresta: Prestation = new Prestation();
  @Output()
  nPresta: EventEmitter<Prestation> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  public process(): void {
    console.log(this.newPresta);
    this.nPresta.emit(this.newPresta);
  }
}
