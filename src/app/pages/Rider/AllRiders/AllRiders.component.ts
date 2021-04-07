import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RiderObjDto } from './../../../Models/RiderObjDto.Model';
import { document } from './../../../Models/RiderDocuments.Model';
import { RiderService } from '../../../../../src/app/_service/rider.service';
import { serviceArea } from './../../../Models/RiderServiceArea.Model';
declare let google: any;
@Component({
  selector: 'app-AllRiders',
  templateUrl: './AllRiders.component.html',
  styleUrls: ['./AllRiders.component.scss']
})
export class AllRidersComponent implements OnInit {

  lat = 0;
  lng = 0;
  lt=0;
  ln=0;
  radiuskm:number;
imagebaseurl="https://deliveryhub.conveyor.cloud/Content/VehicalDocumentsImages";
  RidersList:RiderObjDto[];
  documentdata:document[];
  data:RiderObjDto;
  SearchListOfRiders:RiderObjDto[];
  riderid:number;
  searchKey: string;
    key:string='rowid';
  reverse:boolean=false;
  p:number=1;
  status:boolean;
  phone:any;
 address:any;
  closeResult: string;

  constructor(private riderservice:RiderService,private modalService: NgbModal,private model:serviceArea) { }

  ngOnInit() {
    debugger;
   this.ridersget();
  }
  RiderServiceArea:FormGroup=new FormGroup({
    areaID: new FormControl(this.model.areaID),
    RiderAssignedAreaId: new FormControl(0),
    Arename: new FormControl(this.model.areaName),
    latLong: new FormControl(this.model.latLong),
    radiusKilometer: new FormControl(this.model.radiusKilometer),
    riderID: new FormControl(this.model.riderID),
    
  
   });
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  getcenter(event){
  
    this.lt=event.lat;
    this.ln=event.lng;
    this.RiderServiceArea.get("latLong").patchValue(this.lt+","+this.ln);
    this.getfAddress(this.lt,this.ln);
 
  }
  OpenDocumentsModal(content,id) {
    debugger;
     this.data=this.RidersList.find(x=>x.documents.find(z=>z.riderId==id));
this.documentdata=this.data.documents;
   
    this.modalService.open(content, { centered: true });
  }
  clickFunction(content,riderId:number) {
    var dd=this.RidersList.find(x=>x.riderdata.riderId==riderId);
    if(dd.serviceArea.areaID==0){
      this.modalService.open(content, { centered: true });
    }
    else{
      this.riderservice.Updatestatus(riderId).subscribe((next:any) => {
        this.ridersget();
        
      }, error => {
        console.log(error);
      });
      
    }
    
  
  }
  ridersget(){
    this.riderservice.GetRiders().subscribe((next:any) => {
      debugger;
      this.RidersList=[];
 
      this.RidersList=next.response;
     this.SearchListOfRiders=next.response;
      console.log(this.RidersList);
    
    }, error => {
      console.log(error);
    });
  }
  onOptionsSelected(num){
    debugger;
    if(num=="0"){
      this.SearchListOfRiders=this.RidersList;
    }
    if(num=="1"){
      this.status=true;
      this.SearchListOfRiders=this.RidersList.filter(x=>x.riderdata.riderStatus==this.status);
    }
    if(num=="2"){
      this.status=false;
      this.SearchListOfRiders=this.RidersList.filter(x=>x.riderdata.riderStatus==this.status);
    }

  }
  Sort(key){
    this.key=key;
    this.reverse=!this.reverse;
  }
  OpenAreaAssigningModal(content,id){
    debugger;
    this.RiderServiceArea.reset();
    this.riderid=id;
    this.RiderServiceArea.get("RiderAssignedAreaId").patchValue(0);
    this.modalService.open(content, { centered: true });
  }

  saveArea(){
    debugger
this.RiderServiceArea.get("riderID").patchValue(this.riderid);
console.log(this.RiderServiceArea.value);
this.riderservice.AddArea(this.RiderServiceArea.value).subscribe((next:any) => {
  this.RiderServiceArea.reset;
  this.modalService.dismissAll();
  this.ridersget();

}, error => {
  console.log(error);
});
  }
  OpenAreaAssigningEditModal(content,id){
    debugger
    var dd=this.RidersList.find(x=>x.riderdata.riderId==id);
    this.riderid=dd.serviceArea.riderID;
    var splitted = dd.serviceArea.latLong.split(",");
    this.lat=parseFloat(splitted[0]);
    this.lng=parseFloat(splitted[1]);
    this.lt=parseFloat(splitted[0]);
    this.ln=parseFloat(splitted[1]);
this.radiuskm=dd.serviceArea.radiusKilometer;
    this.RiderServiceArea.get("riderID").patchValue(dd.serviceArea.riderID);
    this.RiderServiceArea.get("Arename").patchValue(dd.serviceArea.areaName);
    this.RiderServiceArea.get("radiusKilometer").patchValue(dd.serviceArea.radiusKilometer);
    this.RiderServiceArea.get("latLong").patchValue(dd.serviceArea.latLong);
    this.RiderServiceArea.get("areaID").patchValue(dd.serviceArea.areaID);
    this.RiderServiceArea.get("RiderAssignedAreaId").patchValue(dd.serviceArea.riderAssignedAreaId);
    this.modalService.open(content, { centered: true });
    console.log(this.lat+this.lng);
  }
  SearchRider(){
    if(this.phone==""){
      this.SearchListOfRiders=this.RidersList
     }
     else{
       if(this.RidersList!=null){
         this.SearchListOfRiders=this.RidersList.filter(res=>{
           return res.riderdata.riderPhone.match(this.phone)
         })
       }
    
     }
  }
  radiuschange(){
    this.radiuskm=this.RiderServiceArea.get("radiusKilometer").value;
  }
  getfAddress( lat: number, lng: number ) {

 
    if (navigator.geolocation) {
    
      let geocoder = new google.maps.Geocoder();
      let latlng = new google.maps.LatLng(lat, lng);
      let request = { latLng: latlng };
      geocoder.geocode({'latLng':latlng}, (results, status) => {
       
        if (status === google.maps.GeocoderStatus.OK) {
          let result = results[0];
          let rsltAdrComponent = result.address_components;
          let resultLength = rsltAdrComponent.length;
          this.address="";
          if (result != null) {
        
            var checkname=null;
            for(let i=0;i<resultLength;i++){
           
                if(checkname!=rsltAdrComponent[i].long_name){
                  this.address+=rsltAdrComponent[i].long_name+",";
                 checkname=rsltAdrComponent[i].long_name;
                }
            }
        
          
          
            this.RiderServiceArea.get("Arename").patchValue(this.address);
            localStorage.setItem('address', this.address);
          } else {
            alert('No address available!');
          }
        }
      });
   
  }
  
  
  }
}
