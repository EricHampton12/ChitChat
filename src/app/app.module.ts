import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FirebaseTSApp } from 'firebasets/firebasetsApp/firebaseTSApp';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';
import {PostFeedComponent} from './pages/post-feed/post-feed.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
//import { RouterOutlet } from '@angular/router';
import { AuthenticatorComponent } from './tools/authenticator/authenticator.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {CreatePostComponent} from './tools/create-post/create-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmailVerificationComponent,
    AuthenticatorComponent,
    ProfileComponent,
    CreatePostComponent,
    PostFeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCardModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    FirebaseTSApp.init(environment.firebaseConfig);
  }
 }