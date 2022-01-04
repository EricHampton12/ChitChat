import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  selectedImageFile: File | undefined;

  constructor() { }

  ngOnInit(): void {
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
