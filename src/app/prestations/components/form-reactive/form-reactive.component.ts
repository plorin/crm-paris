import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from '../../../shared/enums/state.enum';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
        this.init.typePresta,
        Validators.required,
      ],
      client: [
        this.init.client
      ],
      nbJours: [
        this.init.nbJours,
        Validators.required,
      ],
      tjmHT: [
        this.init.tjmHT,
        Validators.compose([Validators.required, Validators.minLength(2)])
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

  public isError(chp: string): boolean {
    return this.form.get(chp).invalid && this.form.get(chp).touched;
  }
}
