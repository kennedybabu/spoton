import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { LoginComponent } from './pages/login/login.component';
import { TripSearchComponent } from './pages/trip-search/trip-search.component';

const routes: Routes = [ 
  {path:'', component: LandingpageComponent},
  {path:'trip-search/:type', component: TripSearchComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
