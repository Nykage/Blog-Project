import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { AuthService } from '../auth.service';
import { Blog } from '../blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {

  public posts: Array<Blog>
  private hideForm: boolean = true;

  selectedPost: Blog;

  constructor(
    private _blogService: BlogService,
    private _authService: AuthService
    ) { }

  ngOnInit() {
    this._blogService.getPosts()
    .subscribe((resPostData: Blog[]) => this.posts = resPostData);
  }

  onSubmitAddPost(newPost: Blog) {
    this._blogService.addPost(newPost)
    .subscribe((resNewPost: any) => {
      this.posts.push(resNewPost);
    });
  }

  newPost() {
    this.hideForm = false;
  }

  returnPosts() {
    this.hideForm = true;
  }

  onSelectPost(post:any){
    this.selectedPost = post;
    this.hideForm = true;
    console.log(this.selectedPost);
  }

}
