import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimeComponent } from './anime/anime.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: FrontpageComponent },
  { path: 'anime', component: AnimeComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  FrontpageComponent,
  AnimeComponent,
  ContactComponent
]