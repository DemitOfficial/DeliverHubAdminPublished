import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ResturantService } from '../../../../../src/app/_service/resturant.service';

@Component({
  selector: 'app-AllResturants',
  templateUrl: './AllResturants.component.html',
  styleUrls: ['./AllResturants.component.scss']
})

export class AllResturantsComponent implements OnInit {

  ResturantList:any;
      SearchListOfConsumer:any[];
      searchKey: string;
        key:string='rowid';
      reverse:boolean=false;
      p:number=1;
     
      constructor(private resturantservice:ResturantService,private modalService: NgbModal, private router: Router) { }
    
      ngOnInit() {
       this.GetResturants();
      }
      clickFunction(id:number) {
        this.resturantservice.Updatestatus(id).subscribe();
        this.GetResturants();
     
      }
    

      openVerticallyCentered(content) {
        this.modalService.open(content, { centered: true });
      }
      GetResturants(){
        this.resturantservice.GetCOnsumers().subscribe((next:any) => {
          this.ResturantList=[];
      
          this.ResturantList=next.res;
         this.SearchListOfConsumer=next.response;
          console.log(this.ResturantList);
          // this.listData = new MatTableDataSource(this.productlist);
          // this.listData.sort=this.sort;
          // this.listData.paginator=this.paginator;
        }, error => {
          console.log(error);
        });
      }
    
      Sort(key){
        this.key=key;
        this.reverse=!this.reverse;
      }

}
