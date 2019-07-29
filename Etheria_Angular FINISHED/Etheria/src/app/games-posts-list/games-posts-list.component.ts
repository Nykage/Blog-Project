import { Component, OnInit, EventEmitter } from '@angular/core';
import { Review } from '../review';

@Component({
  selector: 'games-posts-list',
  templateUrl: './games-posts-list.component.html',
  styleUrls: ['./games-posts-list.component.css'],
  inputs: ['reviews'],
  outputs: ['SelectReview']
})
export class GamesPostsListComponent implements OnInit {

  public SelectReview = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(rev: Review){
    this.SelectReview.emit(rev);
  }
}
