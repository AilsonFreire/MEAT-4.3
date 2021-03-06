import { Component, OnInit } from '@angular/core';
import { RestaurantsService } from 'app/core/restaurants.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  })
export class ReviewsComponent implements OnInit {

  reviews : Observable <any>
  constructor(private restaurantsServeice : RestaurantsService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restaurantsServeice.reviewsOfRestaurant(this.route.parent.snapshot.params['id'])
  }

}
