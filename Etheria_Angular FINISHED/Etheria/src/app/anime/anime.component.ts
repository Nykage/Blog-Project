import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../anime.service';
import { AuthService } from '../auth.service';
import { Review } from '../review';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css'],
  providers: [AnimeService]
})
export class AnimeComponent implements OnInit {

  public reviews: Array<Review>
  private hideForm: boolean = true;

  selectedReview: Review;

  constructor(
    private _animeService: AnimeService,
    private _authService: AuthService
    ) { }

  ngOnInit() {
    this._animeService.getReviews()
    .subscribe((resReviewData: Review[]) => this.reviews = resReviewData);
  }

  onSubmitAddReview(newReview: Review) {
    this._animeService.addReview(newReview)
    .subscribe((resNewReview: any) => {
      this.reviews.push(resNewReview);
    });
  }

  newReview() {
    this.hideForm = false;
  }

  returnReviews() {
    this.hideForm = true;
  }

  onSelectReview(review:any){
    this.selectedReview = review;
    this.hideForm = true;
    console.log(this.selectedReview);
  }
}
