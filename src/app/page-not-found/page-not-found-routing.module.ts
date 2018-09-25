import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes,
    )
  ],
  declarations: [
  ]
})
export class PageNotFoundRoutingModule { }
