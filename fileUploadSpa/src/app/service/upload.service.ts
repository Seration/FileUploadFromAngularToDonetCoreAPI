import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  uploadFile(formdata: any) {
    return this.http.post(
      'http://localhost:34684/api/upload/FileUpload',
      formdata
    );
  }
}
