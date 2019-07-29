import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manga',
  templateUrl: './manga.component.html',
  styleUrls: ['./manga.component.css']
})
export class MangaComponent implements OnInit {

  public mangaReviews = [
    {
      title: "Berserk 1", src: "../../assets/images/manga/berserk-example.png", alt: "Example1"
    },
    {
      title: "Berserk 2", src: "../../assets/images/manga/berserk-example.png", alt: "Example2"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
