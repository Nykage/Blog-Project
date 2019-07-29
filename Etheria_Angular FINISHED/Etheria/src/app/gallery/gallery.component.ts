import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { AuthService } from '../auth.service';
import { Gallery } from '../gallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {

  public images: Array<Gallery>
  private hideForm: boolean = true;

  constructor(
    private _galleryService: GalleryService,
    private _authService: AuthService
    ) { }

  ngOnInit() {
    this._galleryService.getImages()
    .subscribe((resImageData: Gallery[]) => this.images = resImageData);
  }

  onSubmitAddImages(newImages: Gallery) {
    this._galleryService.addImages(newImages)
    .subscribe((resNewImages: any) => {
      this.images.push(resNewImages);
    });
  }

  newImages() {
    this.hideForm = false;
  }

  returnGallery() {
    this.hideForm = true;
  }
}
