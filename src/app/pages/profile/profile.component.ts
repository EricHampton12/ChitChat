import { Component, OnInit } from '@angular/core';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import {Profile} from './profile.interface'
import { ActivatedRoute , ParamMap  } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  show: boolean = false;
  email:string ="";
  firestore: FirebaseTSFirestore;
  auth: FirebaseTSAuth;

  constructor() {
    this.firestore = new FirebaseTSFirestore();
    this.auth = new FirebaseTSAuth();
  }

  ngOnInit() {  
} 

   onContinueClick(
     nameInput: HTMLInputElement,
     ageInput: HTMLInputElement,
     bioInput: HTMLInputElement
   ) {
    let name = nameInput.value;
    this.firestore.create(
      {
        path: ["Users"],
        data: {
          nameInput,ageInput,bioInput,
        },
        onComplete: (docId) => {
          alert("profile Created");
        },
        onFail: (err) => {
          alert("profile not Created");
        }
      }
    );
   }

 }
function input() {
  throw new Error('Function not implemented.');
}