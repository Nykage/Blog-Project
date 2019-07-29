import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'anime-posts',
  templateUrl: './anime-posts.component.html',
  styleUrls: ['./anime-posts.component.css'],
  inputs: ['review']
})
export class AnimePostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
