import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Prestation } from '../../../shared/models/prestation';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {
  public states = Object.values(State);
  public form: FormGroup;
  private init: Prestation = new Prestation();
  @Output() nPresta: EventEmitter<Prestation> = new EventEmitter();
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.form = this.formBuilder.group({
      typePresta: [
        this.init.typePresta
      ],
      client: [
        this.init.client
      ],
      nbJours: [
        this.init.nbJours
      ],
      tjmHT: [
        this.init.tjmHT
      ],
      tauxTVA: [
        this.init.tauxTVA
      ],
      state: [
        this.init.state
      ],
    });
  }
  public process(): void {
    console.log(this.form.value);
    this.nPresta.emit(new Prestation(this.form.value));
  }
}
