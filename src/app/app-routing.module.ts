import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  /*{
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },*/
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ]
})

export class AppRoutingModule {

 }
