import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RsvpComponent } from './pages/rsvp/rsvp.component';
// import { WeddingPartyComponent } from './pages/wedding-party/wedding-party.component';
// import { ExploreComponent } from './pages/explore/explore.component';
// import { LodgingComponent } from './pages/lodging/lodging.component';
// import { EventsComponent } from './pages/events/events.component';
// import { RegistryComponent } from './pages/registry/registry.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { WeddingHighlightsComponent } from './pages/wedding-highlights/wedding-highlights.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'rsvp', component: RsvpComponent },
  // { path: 'party', component: WeddingPartyComponent },
  // { path: 'explore', component: ExploreComponent },
  // { path: 'lodging', component: LodgingComponent },
  // { path: 'events', component: EventsComponent },
  // { path: 'registry', component: RegistryComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'highlights', component: WeddingHighlightsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
