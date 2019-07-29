import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css'],
  inputs: ['post']
})
export class BlogPostsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
