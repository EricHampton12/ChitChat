import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthenticatorComponent } from 'src/app/tools/authenticator/authenticator.component';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/FirebaseTSAuth';
import { Router } from '@angular/router';
//import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChitChat';
  auth = new FirebaseTSAuth();
  userHasProfile:boolean = false;
  //userDocument!: userDocument;
  //isLoggedIn: boolean = false;
constructor(private loginSheet: MatBottomSheet,
  private router: Router){
  this.auth.listenToSignInStateChanges(
    user => {
      this.auth.checkSignInState(
        {
          whenSignedIn: user => {
            
          },

          whenSignedOut: user => {
          },

          whenSignedInAndEmailNotVerified: user => {
            this.userHasProfile=false;
             this.router.navigate(["emailVerification"]);
         },

          whenSignedInAndEmailVerified: user => {
            let myuser = user; 
            if(!this.userHasProfile)
              this.router.navigate(["createprofile"]);
            else
              this.router.navigate(["postfeed"]);
          },

          whenChanged: user => {

          }
        }
      );
    }
  );
}

onLogoutClick() {
  this.auth.signOut();
}

loggedIn() {
  return this.auth.isSignedIn();
}

  onLoginClick() {
    this.loginSheet.open(AuthenticatorComponent);
  }
  // getUserProfile(){
  //   this.fireStore.listenToDocument(
  //     {
  //       name: "Getting Documnets",
  //       path: ["Users"],
  //       onUpdate: (result) => {
  //         this.userDocument = <userDocument>result.data();

  //         this.userHasProfile = result.exists;
  //       }
  //     }
  //   );
  // }
}


