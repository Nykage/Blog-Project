import { Component, OnInit, EventEmitter } from '@angular/core';
import { Blog } from '../blog';

@Component({
  selector: 'blog-posts-list',
  templateUrl: './blog-posts-list.component.html',
  styleUrls: ['./blog-posts-list.component.css'],
  inputs: ['posts'],
  outputs: ['SelectPost']
})
export class BlogPostsListComponent implements OnInit {

  public SelectPost = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(post: Blog){
    this.SelectPost.emit(post);
  }
}
