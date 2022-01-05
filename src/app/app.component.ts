import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticatorComponent } from 'src/app/tools/authenticator/authenticator.component';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { Router } from '@angular/router'
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChitChat';
  auth= new FirebaseTSAuth();
  fireStore = new FirebaseTSFirestore();
  userHasProfile = true;
  userDocument!: userDocument;
  isLoggedIn: boolean = false;

constructor(private loginSheet: MatBottomSheet,
    private router: Router
  ){
    this.auth.listenToSignInStateChanges(
      user => {
        this.auth.checkSignInState(
          {
            whenSignedIn: user => {
              alert("Logged In");
              this.isLoggedIn = true;
            },
            whenSignedOut: user => {
              alert("Logged Out")
            },
            whenSignedInAndEmailNotVerified: user => {
              this.router.navigate(["emailVerification"]);
            },
            whenSignedInAndEmailVerified: user => {
              this.getUserProfile();
            },
            whenChanged: user => {

            }
          }
        )
      }
    );
}

  getUserProfile(){
    this.fireStore.listenToDocument(
      {
        name: "Getting Documnets",
        path: ["Users", this.auth.getAuth().currentUser.uid],
        onUpdate: (result) => {
          this.userDocument = <userDocument>result.data();

          this.userHasProfile = result.exists;
        }
      }
    );
  }

  onLogoutClick(){
    this.auth.signOut();
  }

  loggedIn(){
    return this.auth.isSignedIn();
  }

  onLoginClick() {
    this.loginSheet.open(AuthenticatorComponent);
  }
}

export interface userDocument {
  publicName: string;
  description: string;
}