import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  public topPosts = [
    {
      thumbnail: "thumbnail1", title: "Example Title", src: "assets/images/thumbnails/thumbnail-example-1.jpg", alt: "thumbnail-example-1"
    },
    {
      thumbnail: "thumbnail2", title: "Example Title", src: "assets/images/thumbnails/thumbnail-example-2.jpg", alt: "thumbnail-example-2"
    },
    {
      thumbnail: "thumbnail3", title: "Example Title", src: "assets/images/thumbnails/thumbnail-example-3.jpg", alt: "thumbnail-example-3"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
