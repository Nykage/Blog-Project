import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Review } from './review';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private _getUrl = "https://etheriaserver.herokuapp.com/api/gamereviews";
  private _postUrl = "https://etheriaserver.herokuapp.com/api/gamereviewspost";

  constructor(private _http: HttpClient) { }

  getReviews() {
    return this._http.get<any>(this._getUrl)
  }

  addReview(reviews: Review) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this._http.post(this._postUrl, JSON.stringify(reviews), options)
  }

}
