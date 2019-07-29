import { Component, OnInit } from '@angular/core';
import { VideogalleryService } from '../videogallery.service';
import { AuthService } from '../auth.service';
import { Videos } from '../videos';

@Component({
  selector: 'app-videogallery',
  templateUrl: './videogallery.component.html',
  styleUrls: ['./videogallery.component.css'],
  providers: [VideogalleryService]
})
export class VideogalleryComponent implements OnInit {

  public videos: Array<Videos>
  private hideForm: boolean = true;

  constructor(
    private _videogalleryService: VideogalleryService,
    private _authService: AuthService
    ) { }

  ngOnInit() {
    this._videogalleryService.getVideos()
    .subscribe((resVideoData: Videos[]) => this.videos = resVideoData);
  }

  onSubmitAddVideos(newVideos: Videos) {
    this._videogalleryService.addVideos(newVideos)
    .subscribe((resNewVideos: any) => {
      this.videos.push(resNewVideos);
    });
  }

  newVideos() {
    this.hideForm = false;
  }

  returnVideoGallery() {
    this.hideForm = true;
  }


}
