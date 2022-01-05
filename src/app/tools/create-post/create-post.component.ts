import { Component, OnInit } from '@angular/core';
import { FirebaseTSStorage } from 'firebasets/FirebaseTSStorage/firebaseTSStorage';
import { FirebaseTSAuth } from 'firebasets/firebasetsAuth/firebaseTSAuth';
import { FirebaseTSFirestore } from 'firebasets/firebasetsFirestore/firebaseTSFirestore';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  selectedImageFile: File | undefined;
  auth = new FirebaseTSAuth();
  firestore = new FirebaseTSFirestore();
  storage = new FirebaseTSStorage();
  constructor() { }

  ngOnInit(): void {
  }

  onPostClick(commentInput: HTMLTextAreaElement) {
    let comment = commentInput.value;
    let postId = this.firestore.genDocId
    this.storage.upload(
      {
        uploadName: "upload Image Post",
        path: ["Posts", "Post1", "image"],
        data: {
          data: this.selectedImageFile
        },
        onComplete: (downloadUrl) => {
          alert(downloadUrl);
        }
      }
    );
  }

  onPhotoSelected(photoSelector: HTMLInputElement) {
    photoSelector.files;
    if(!this.selectedImageFile) return;
    let fileReader = new FileReader();
    fileReader.readAsDataURL(this.selectedImageFile);
    fileReader.addEventListener(
      "loadend",
      ev => {
          let readableString = toString();
          let postPreviewImage = <HTMLImageElement>document.getElementById("post-preview-image");
          postPreviewImage.src = readableString;
        }
    );
  }
}