import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private _getUrl = "https://etheriaserver.herokuapp.com/api/blogposts";
  private _postUrl = "https://etheriaserver.herokuapp.com/api/postblogpost";

  constructor(private _http: HttpClient) { }

  getPosts() {
    return this._http.get<any>(this._getUrl)
  }

  addPost(posts: Blog) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this._http.post(this._postUrl, JSON.stringify(posts), options)
  }

}
