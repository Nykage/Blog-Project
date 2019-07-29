import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Videos } from './videos';

@Injectable({
  providedIn: 'root'
})
export class VideogalleryService {

  private _getUrl = "https://etheriaserver.herokuapp.com/api/videos";
  private _postUrl = "https://etheriaserver.herokuapp.com/api/videospost";

  constructor(private _http: HttpClient) { }

  getVideos() {
    return this._http.get<any>(this._getUrl)
  }

  addVideos(videos: Videos) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    let options = { headers: headers };
    return this._http.post(this._postUrl, JSON.stringify(videos), options)
  }

}
