import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResturantService } from '../../../../../src/app/_service/resturant.service';

@Component({
  selector: 'app-ResturantReviews',
  templateUrl: './ResturantReviews.component.html',
  styleUrls: ['./ResturantReviews.component.scss']
})
export class ResturantReviewsComponent implements OnInit {
  ResturnatId: number;
  ResturantReviewsList:any;
  constructor(private router: Router,private route: ActivatedRoute,private resturantservice:ResturantService) { }

  ngOnInit() {
 

    this.ResturnatId = this.route.snapshot.params['restaurantID'];
    this.getReviews(this.ResturnatId = this.route.snapshot.params['restaurantID'] );

  }
  getReviews(user_id) {

    this.resturantservice.GetresturantReviews(user_id).subscribe((next:any) => {
      this.ResturantReviewsList=[];
  
      this.ResturantReviewsList=next.res;
     
      console.log(this.ResturantReviewsList);
      // this.listData = new MatTableDataSource(this.productlist);
      // this.listData.sort=this.sort;
      // this.listData.paginator=this.paginator;
    }, error => {
      console.log(error);
    });;
  
 
  }

}
