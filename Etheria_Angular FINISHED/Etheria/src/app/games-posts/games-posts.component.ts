import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'games-posts',
  templateUrl: './games-posts.component.html',
  styleUrls: ['./games-posts.component.css'],
  inputs: ['review']
})
export class GamesPostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
