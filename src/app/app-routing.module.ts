import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { LoginComponent } from './pages/login/login.component';
import { TripSearchComponent } from './pages/trip-search/trip-search.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BookingComponent } from './pages/booking/booking.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RoleBaseGuard } from './_guard/role-base.guard';
import { HotelComponent } from './pages/hotel/hotel.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { DestinationsComponent } from './components/destinations/destinations/destinations.component';
import { DestinationComponent } from './pages/destination/destination.component';



const routes: Routes = [ 
  {path:'', redirectTo: '/landingpage', pathMatch: 'full'},
  {path:'landingpage', component: LandingpageComponent},
  {path:'trip-search/:type', component: TripSearchComponent},
  {path:'login', component:LoginComponent},
  {path:'booking/:id', component: BookingComponent},
  {path: 'admin', component: AdminComponent, canActivate: [RoleBaseGuard]},
  {path:'signup', component: SignupComponent},
  {path: 'hotel/:id', component: HotelComponent},
  {path:'hotels', component: HotelsComponent},
  {path:'destination/:id', component: DestinationComponent},
  {path:'destinations', component: DestinationsComponent},
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
