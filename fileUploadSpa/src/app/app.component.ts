import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UploadService } from './service/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fileUploadSpa';

  formData: any;
  file: any;
  isFileExist = 0;
  isSuccess = 0;

  constructor(private uploadService: UploadService) {}


  fileChange(event): void {

    this.isSuccess = 0;

    const fileList: FileList = event.target.files;

    if (fileList.length > 0) {
      this.file = fileList[0];
      this.isFileExist = 1;
    }
  }

  uploadFile() {

    this.formData = new FormData();

    if (this.isFileExist === 1) {
      this.formData.append('uploadedFile', this.file, this.file.name);
    }

    this.uploadService.uploadFile(this.formData).subscribe(data => {
      this.isFileExist = 0;
      this.isSuccess = 1;
    });
  }
}
