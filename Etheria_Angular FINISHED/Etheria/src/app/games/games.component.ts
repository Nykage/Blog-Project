import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { AuthService } from '../auth.service';
import { Review } from '../review';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  providers: [GamesService]
})
export class GamesComponent implements OnInit {

  public reviews: Array<Review>
  private hideForm: boolean = true;

  selectedReview: Review;

  constructor(
    private _gameService: GamesService,
    private _authService: AuthService
    ) { }

  ngOnInit() {
    this._gameService.getReviews()
    .subscribe((resReviewData: Review[]) => this.reviews = resReviewData);
  }

  onSubmitAddReview(newReview: Review) {
    this._gameService.addReview(newReview)
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
