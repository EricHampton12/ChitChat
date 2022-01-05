import { Component, OnInit } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  show: boolean = false;

  firestore: FirebaseTSFirestore;
  auth: FirebaseTSAuth;

  constructor() {
    this.firestore = new FirebaseTSFirestore();
    this.auth = new FirebaseTSAuth();
  }

  ngOnInit(): void {
  }

  onContinueClick(
    nameInput: HTMLInputElement,
    descriptionInput: HTMLInputElement
  ) {
    let name = nameInput.value;
    let description = descriptionInput.value;
    this.firestore.create(
      {
        path: ["Users"],
        data: {

        },
        onComplete: (docId) => {
          alert("profile Created");
          nameInput.value = "";
          descriptionInput.value = "";
        },
        onFail: (err) => {

        }
      }
    );
  }

}
function input() {
  throw new Error('Function not implemented.');
}

