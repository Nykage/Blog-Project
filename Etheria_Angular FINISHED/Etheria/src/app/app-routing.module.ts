import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ContactComponent } from './contact/contact.component';
import { MangaComponent } from './manga/manga.component';
import { GamesComponent } from './games/games.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { BlogComponent } from './blog/blog.component';
import { VideogalleryComponent } from './videogallery/videogallery.component';

const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'contact', component: ContactComponent /*canActivate: [AuthGuard]*/ },
  { path: 'manga', component: MangaComponent },
  { path: 'games', component: GamesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'videogallery', component: VideogalleryComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  FrontpageComponent,
  BlogComponent,
  AnimeComponent,
  ContactComponent,
  MangaComponent,
  GamesComponent,
  GalleryComponent,
  VideogalleryComponent,
  RegisterComponent,
  LoginComponent
]