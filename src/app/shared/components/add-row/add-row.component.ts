import { Component, OnInit, Input } from '@angular/core';
import { Row } from '../../interfaces/row';

@Component({
  selector: 'app-add-row',
  templateUrl: './add-row.component.html',
  styleUrls: ['./add-row.component.scss']
})
export class AddRowComponent implements OnInit {
  @Input() addRow: Row;

  constructor() { }

  ngOnInit() {
  }

}
