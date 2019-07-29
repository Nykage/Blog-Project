import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ContactComponent } from './contact/contact.component';
import { MangaComponent } from './manga/manga.component';
import { GamesComponent } from './games/games.component';
import { PostsComponent } from './posts/posts.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryService } from './gallery.service';
import { BlogComponent } from './blog/blog.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AnimePostsComponent } from './anime-posts/anime-posts.component';
import { AnimePostsListComponent } from './anime-posts-list/anime-posts-list.component';
import { VideogalleryComponent } from './videogallery/videogallery.component';
import { GamesPostsComponent } from './games-posts/games-posts.component';
import { GamesPostsListComponent } from './games-posts-list/games-posts-list.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { BlogPostsListComponent } from './blog-posts-list/blog-posts-list.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    FrontpageComponent,
    ContactComponent,
    MangaComponent,
    GamesComponent,
    PostsComponent,
    RegisterComponent,
    LoginComponent,
    GalleryComponent,
    BlogComponent,
    PostsListComponent,
    AnimePostsComponent,
    AnimePostsListComponent,
    VideogalleryComponent,
    GamesPostsComponent,
    GamesPostsListComponent,
    BlogPostsComponent,
    BlogPostsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    GalleryService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
