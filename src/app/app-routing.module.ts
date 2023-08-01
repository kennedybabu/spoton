import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { LoginComponent } from './pages/login/login.component';
import { TripSearchComponent } from './pages/trip-search/trip-search.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BookingComponent } from './pages/booking/booking.component';

const routes: Routes = [ 
  {path:'', component: LandingpageComponent},
  {path:'trip-search/:type', component: TripSearchComponent},
  {path:'login', component:LoginComponent},
  {path:'booking', component: BookingComponent},
  {path:'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
