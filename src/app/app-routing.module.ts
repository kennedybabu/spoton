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



const routes: Routes = [ 
  {path:'', redirectTo: '/landingpage', pathMatch: 'full'},
  {path:'landingpage', component: LandingpageComponent},
  {path:'trip-search/:type', component: TripSearchComponent},
  {path:'login', component:LoginComponent},
  {path:'booking', component: BookingComponent},
  {path: 'admin', component: AdminComponent, canActivate: [RoleBaseGuard]},
  {path:'signup', component: SignupComponent},
  {path: 'hotel/:id', component: HotelComponent},
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
