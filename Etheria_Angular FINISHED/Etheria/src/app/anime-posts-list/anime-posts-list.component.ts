import { Component, OnInit, EventEmitter } from '@angular/core';
import { Review } from '../review';

@Component({
  selector: 'anime-posts-list',
  templateUrl: './anime-posts-list.component.html',
  styleUrls: ['./anime-posts-list.component.css'],
  inputs: ['reviews'],
  outputs: ['SelectReview']
})
export class AnimePostsListComponent implements OnInit {

  public SelectReview = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(rev: Review){
    this.SelectReview.emit(rev);
  }
}
