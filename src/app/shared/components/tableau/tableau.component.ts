import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Row } from '../../interfaces/row';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss'],
  encapsulation: ViewEncapsulation.None, // pour pouvoir utiliser le scss partout
})
export class TableauComponent implements OnInit {
  @Input() headers: string[];
  @Input() addRow: Row;

  constructor() { }

  ngOnInit() {
  }

}
