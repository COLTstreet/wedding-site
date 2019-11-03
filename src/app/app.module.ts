import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { environment } from '../environments/environment';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
import { HeaderComponent } from './core/header/header.component';
import { WeddingPartyComponent } from './pages/wedding-party/wedding-party.component';
import { ExploreComponent, FilterPipe } from './pages/explore/explore.component';
import { LodgingComponent, EmailDialog } from './pages/lodging/lodging.component';
import { MaterialModule } from './core/material/material.module';
import { EventsComponent } from './pages/events/events.component';
import { RegistryComponent } from './pages/registry/registry.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RsvpComponent,
    HeaderComponent,
    WeddingPartyComponent,
    ExploreComponent,
    FilterPipe,
    LodgingComponent,
    EventsComponent,
    RegistryComponent,
    GalleryComponent,
    AboutUsComponent,
    EmailDialog
  ],
  entryComponents: [
    EmailDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
