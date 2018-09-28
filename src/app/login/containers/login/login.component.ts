import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;

  constructor() { }

  ngOnInit() {
  }
  public login(): void {
    console.log(this.form.value);
    // this.nPresta.emit(new Prestation(this.form.value));
  }

  public isError(chp: string): boolean {
    return this.form.get(chp).invalid && this.form.get(chp).touched;
  }
}
