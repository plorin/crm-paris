import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPipe } from './pipes/total.pipe';
import { TableauComponent } from './components/tableau/tableau.component';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddRowComponent } from './components/add-row/add-row.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
  ],
  declarations: [TotalPipe, TableauComponent, AddRowComponent],
  exports: [TotalPipe, TableauComponent, AddRowComponent],
})
export class SharedModule { }
