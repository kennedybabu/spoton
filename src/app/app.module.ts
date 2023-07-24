import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatSliderModule} from '@angular/material/slider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { PartnerBannerComponent } from './components/partner-banner/partner-banner.component';
import { ParallaxBannerComponent } from './components/parallax-banner/parallax-banner.component';
import { TripSearchComponent } from './pages/trip-search/trip-search.component';
import {MatDialogModule} from '@angular/material/dialog';
import { VideosComponent } from './components/videos/videos.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingpageComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    PartnerBannerComponent,
    ParallaxBannerComponent,
    TripSearchComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatSliderModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatDialogModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
