import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Gallery } from './gallery';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private _getUrl = "https://etheriaserver.herokuapp.com/api/gallery";
  private _postUrl = "https://etheriaserver.herokuapp.com/api/gallerypost";

  constructor(private _http: HttpClient) { }

  getImages() {
    return this._http.get<any>(this._getUrl)
  }

  addImages(images: Gallery) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    let options = { headers: headers };
    return this._http.post(this._postUrl, JSON.stringify(images), options)
  }
}
