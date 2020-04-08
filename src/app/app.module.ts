import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PlayerComponent } from './components/player/player.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {fas}  from '@fortawesome/free-solid-svg-icons';
import { library, icon } from '@fortawesome/fontawesome-svg-core'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { LoginComponent } from './pages/login/login.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MusicComponent } from './pages/music/music.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    PlayerComponent,
    PlaylistComponent,
    NavbarComponent,
    LoginComponent,
    LandingComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    YouTubePlayerModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    library.add(fas);
  }
}
