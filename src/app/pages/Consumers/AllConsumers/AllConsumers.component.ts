import { Component, OnInit } from '@angular/core';
import { ConsumersService } from '../../../../../src/app/_service/consumers.service';

@Component({
  selector: 'app-AllConsumers',
  templateUrl: './AllConsumers.component.html',
  styleUrls: ['./AllConsumers.component.scss']
})
export class AllConsumersComponent implements OnInit {

  ConsumerList:any;
      SearchListOfConsumer:any[];
      searchKey: string;
      ConsumerName:any ;
        key:string='rowid';
      reverse:boolean=false;
      p:number=1;
      constructor(private consumerservice:ConsumersService) { }
    
      ngOnInit() {
       this.GetConsumers();
      }
      clickFunction(consumer_Id:number) {

        this.consumerservice.Updatestatus(consumer_Id).subscribe();
        this.GetConsumers();
     
      }
      GetConsumers(){
        this.consumerservice.GetCOnsumers().subscribe((next:any) => {
          this.ConsumerList=[];
      
          this.ConsumerList=next.res;
         this.SearchListOfConsumer=next.response;
          console.log(this.ConsumerList);
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
