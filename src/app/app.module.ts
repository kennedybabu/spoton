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
import { BookTourComponent } from './components/book-tour/book-tour.component';
import { BookingComponent } from './pages/booking/booking.component';
import {MatTabsModule} from '@angular/material/tabs';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './pages/admin/admin.component'; 
import { AuthInterceptor } from './_services/auth.interceptor';
import {MatListModule} from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { CreatePackageTypeComponent } from './components/package/create-package-type/create-package-type.component';
import { CreateDestinationsComponent } from './components/destinations/create-destinations/create-destinations.component';
import { DestinationsComponent } from './components/destinations/destinations/destinations.component';
import { PackagesComponent } from './components/package/packages/packages.component';
import { MatIconModule } from '@angular/material/icon';
import { CreateCostComponent } from './components/transport/create-cost/create-cost.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { HotelComponent } from './pages/hotel/hotel.component';
import { CreateHotelImagesComponent } from './components/hotels/create-hotel-images/create-hotel-images.component';
import { HotelAmenityTileComponent } from './components/hotels/hotel-amenity-tile/hotel-amenity-tile.component';
import { TestimonialsComponent } from './components/hotels/testimonials/testimonials.component';
import { CreateTestimonialComponent } from './components/hotels/create-testimonial/create-testimonial.component';
import { HotelRoomTileComponent } from './components/hotels/hotel-room-tile/hotel-room-tile.component';
import { CreateHotelRoomTypeComponent } from './components/hotels/create-hotel-room-type/create-hotel-room-type.component';
import { PackageTileComponent } from './components/package-tile/package-tile.component';
import { InterceptorService } from './services/loader/interceptor.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { CreateHotelAmenityComponent } from './components/hotels/create-hotel-amenity/create-hotel-amenity.component';
import { HotelAmenitiesComponent } from './components/hotels/hotel-amenities/hotel-amenities.component';
import { RemoveSpacePipe } from './remove-space-pipe';
import {MatExpansionModule} from '@angular/material/expansion';
import { CreateDestPackagesComponent } from './components/destinations/create-dest-packages/create-dest-packages.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { CreatePackageOptionComponent } from './components/package/create-package-option/create-package-option.component';


@NgModule({
  declarations: [
    AppComponent,
    RemoveSpacePipe,
    NavbarComponent,
    LandingpageComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    PartnerBannerComponent,
    ParallaxBannerComponent,
    TripSearchComponent,
    VideosComponent,
    BookTourComponent,
    BookingComponent,
    AdminComponent,
    CreatePackageTypeComponent,
    CreateDestinationsComponent,
    DestinationsComponent,
    PackagesComponent,
    CreateCostComponent,
    HotelsComponent,
    HotelComponent,
    CreateHotelImagesComponent,
    HotelAmenityTileComponent,
    TestimonialsComponent,
    CreateTestimonialComponent,
    HotelRoomTileComponent,
    CreateHotelRoomTypeComponent,
    PackageTileComponent,
    CreateHotelAmenityComponent,
    HotelAmenitiesComponent,
    CreateDestPackagesComponent,
    DestinationComponent,
    CreatePackageOptionComponent,
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
    MatDialogModule,
    MatTabsModule,
    HttpClientModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatExpansionModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
