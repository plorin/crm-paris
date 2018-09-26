import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { State } from '../enums/state.enum';

@Directive({
  selector: '[appStateClass]'
})
export class StateClassDirective implements  OnChanges {
  @HostBinding('class') nomClass: string;
  @Input() appStateClass: State;

  constructor() {

  }
  ngOnChanges(): void {
    console.log('ngOnChanges', event, this.appStateClass);
    this.nomClass = this.formatClass(this.appStateClass);
  }

  private formatClass(state: State): string {

    /*switch (state) {
      case State.CONFIRME :
        this.nomClass = 'state-confirme';
        break;
      case State.ANNULE :
        this.nomClass = 'state-annule';
        break;
      case State.OPTION :
        this.nomClass = 'state-option';
        break;
    }
    return this.nomClass;*/
    // console.log(state, state.toString().normalize('NFD').replace(/[\u0300-\u036f]/g, ''));
    return `state-${state.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()}`;
  }
}
