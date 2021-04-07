import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { packagedata } from './../../../../src/app/Models/packagedata.Model';
import { DeliveryFair } from './../../../../src/app/Models/deliveryfair.Model';
import { DeliveryFairService } from './../../../../src/app/_service/DeliveryFair.service';
import { DeliverychargesDto } from './../../../../src/app/Models/deliverychargesDto';
import { Grocerydelivery } from './../../../../src/app/Models/grocerydelivery';
import { Grocerydeduction } from './../../../../src/app/Models/grocerydeduction';
import { Restaurantdeduction } from './../../../../src/app/Models/restaurantdeduction';
import { Restaurantdelivery } from './../../../../src/app/Models/restaurantdelivery';
import { LocalDeliveryfair } from '../../../../src/app/Models/localDeliveryfair';

@Component({
  selector: 'app-FairAndPercentage',
  templateUrl: './FairAndPercentage.component.html',
  styleUrls: ['./FairAndPercentage.component.scss']
})
export class FairAndPercentageComponent implements OnInit {
  editProfile = true;
  storedeliveryshow:boolean = false;
  storedectionshow:boolean = false;
  restaurantdeliveryshow:boolean = false;
  restaurantdectionshow:boolean = false;
  Localdelivery:boolean = false;
  storeform:boolean=true;
  packagedata:packagedata;
  storedeliverydata:Grocerydelivery;
  storepersontageydata:Grocerydeduction;
  restaurantdeliverydata:Restaurantdeduction;
  localdeliveryfare:LocalDeliveryfair;
  chargesdata:DeliverychargesDto;
  editProfileIcon = 'icofont-edit';
deliverydata:DeliveryFair;
Restaurantdeliverydata:Restaurantdelivery;
  deliveryform:FormGroup=new FormGroup({
    deleiveryFairId: new FormControl(''),
    deliveryCharges: new FormControl('')

  
   });
   storedelivery:FormGroup=new FormGroup({
    grocceryDeliveryFairId: new FormControl(0),
    deliveryCharges: new FormControl(0),
    perKilometer: new FormControl(0)
  
   });
   Grocerydeductionform:FormGroup=new FormGroup({
    percentageAmount: new FormControl(0),
    grocceryStorePercentageId: new FormControl(0)
  
   });
   restdeliveryform:FormGroup=new FormGroup({
    restaurantPercentageID: new FormControl(0),
    percentageAmount: new FormControl(0)
  
   });
   restdelivery1form:FormGroup=new FormGroup({
    deleiveryFairId: new FormControl(0),
    deliveryCharges: new FormControl(0),
    perKilometer:new FormControl(0),
  
   });
   Localdeliveryform:FormGroup=new FormGroup({
    localDeliveryFairId: new FormControl(0),
    deliveryCharges: new FormControl(0),
    perKilometer:new FormControl(0),
  
   });
   

 packageform:FormGroup=new FormGroup({
  packageid: new FormControl(''),
  packageName: new FormControl(''),
  percentageDetuction:new FormControl('')
  
   });
  editAbout = true;
  editAbout1 = true;
  editAboutIcon = 'icofont-edit';

  public basicContent: string;


  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  profitChartOption: any;

  constructor(private deliveryservice:DeliveryFairService) { }

  ngOnInit() {
    this.Getfulldeliveryinfos();
    // this.getdeliveryfair();
    // this.getpackage();
  }
  toggleEditProfile() {
    this.editProfile=true;
    this.storedeliveryshow=true;
    this.storedectionshow=true;
   
    console.log(this.restaurantdeliverydata);
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.restdeliveryform.get("restaurantPercentageID").patchValue(this.restaurantdeliverydata.restaurantPercentageID);
      this.restdeliveryform.get("percentageAmount").patchValue(this.restaurantdeliverydata.percentageAmount);
    this.editProfile = !this.editProfile;
  }
  storedeliveryupdate() {
    debugger;
  
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.storedelivery.get("grocceryDeliveryFairId").patchValue(this.storedeliverydata.grocceryDeliveryFairId);
      this.storedelivery.get("deliveryCharges").patchValue(this.storedeliverydata.deliveryCharges);
      this.storedelivery.get("perKilometer").patchValue(this.storedeliverydata.perKilometer);
      console.log(this.storedelivery.value)
    this.storedeliveryshow=!this.storedeliveryshow;
   
  }
  Storedetuction() {

    this.storedectionshow = !this.storedectionshow;
    console.log(this.storepersontageydata)
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.Grocerydeductionform.get("grocceryStorePercentageId").patchValue(this.storepersontageydata.grocceryStorePercentageId);
    this.Grocerydeductionform.get("percentageAmount").patchValue(this.storepersontageydata.percentageAmount);
    console.log(this.Grocerydeductionform.value)

  }
  Sendstoredelivery()
  {
    debugger;
    this.storedeliveryshow = !this.storedeliveryshow;
  
    this.deliveryservice.updatestoredelivery(this.storedelivery.value).subscribe((next:any)=>{
      this.getpackage();
      debugger;
    this.Getfulldeliveryinfos();
      this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
   
          });
          console.log(this.storedelivery.value)

  }
  submitdeductionupdate()
  {
    debugger
    this.storedeliveryshow = !this.storedeliveryshow;
  
    this.deliveryservice.updatestorededuction(this.Grocerydeductionform.value).subscribe((next:any)=>{
      this.Getfulldeliveryinfos();
      this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editAbout = !this.editAbout;
    this.storedeliveryshow=false;
    this.storedectionshow=false;
    this.storeform=true;
    this.editAbout = !this.editAbout;
   
    this.storedeliveryshow = true;
    this.storedectionshow= true;
    this.editProfile=true;
          });
          console.log(this.deliveryform.value)

  }
  toggleeditstoredection() {
    debugger;

    this.storedeliveryshow = !this.storedeliveryshow;
    console.log(this.storepersontageydata)
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.Grocerydeductionform.get("grocceryStorePercentageId").patchValue(this.storepersontageydata.grocceryStorePercentageId);
    this.Grocerydeductionform.get("percentageAmount").patchValue(this.storepersontageydata.percentageAmount);
    console.log(this.Grocerydeductionform.value)


  }

  Restaurantdeliveryshow() {
 
    debugger;
    console.log(this.chargesdata.restaurantdelivery);
    console.log(this.chargesdata.restaurantdeduction);
    this.restaurantdeliveryshow= true;
    this.restaurantdectionshow= false;
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.restdeliveryform.get("restaurantPercentageID").patchValue(this.restaurantdeliverydata.restaurantPercentageID);
      this.restdeliveryform.get("percentageAmount").patchValue(this.restaurantdeliverydata.percentageAmount);
 
    this.editAbout = !this.editAbout;
  }
  Localdeliveryshow() {
debugger;
    this.Localdelivery=true;
    this.storedeliveryshow = false;
    this.storedectionshow= false;
    this.restaurantdeliveryshow=false;
    this.restaurantdectionshow=false;
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.Localdeliveryform.get("localDeliveryFairId").patchValue(this.localdeliveryfare.localDeliveryFairId);
      this.Localdeliveryform.get("deliveryCharges").patchValue((this.localdeliveryfare.deliveryCharges));
      this.Localdeliveryform.get("perKilometer").patchValue((this.localdeliveryfare.perKilometer));
  
  }
  toggleEditAbout1() {

    debugger;
    console.log(this.chargesdata.restaurantdelivery);
 
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.restdelivery1form.get("deleiveryFairId").patchValue(this.chargesdata.restaurantdelivery.deleiveryFairId);
    this.restdelivery1form.get("deliveryCharges").patchValue(this.chargesdata.restaurantdelivery.deliveryCharges);
    this.restdelivery1form.get("perKilometer").patchValue(this.chargesdata.restaurantdelivery.perKilometer);
 
    this.editAbout = !this.editAbout;
  }
  onclickresaturantpersantage() {
    this.restaurantdeliveryshow= false;
    this.restaurantdectionshow= true;
   
    this.editAbout1 = !this.editAbout1;
    console.log(this.chargesdata.restaurantdelivery);
 
    this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.restdelivery1form.get("deleiveryFairId").patchValue(this.chargesdata.restaurantdelivery.deleiveryFairId);
    this.restdelivery1form.get("deliveryCharges").patchValue(this.chargesdata.restaurantdelivery.deliveryCharges);
    this.restdelivery1form.get("perKilometer").patchValue(this.chargesdata.restaurantdelivery.perKilometer);
  }
  updateDelivery(){
    this.deliveryservice.Updatedeliveryfair(this.deliveryform.value).subscribe((next:any)=>{
   this.Getfulldeliveryinfos();
this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
this.editProfile = !this.editProfile;
this.editAbout = !this.editAbout;
   
    this.storedeliveryshow = true;
    this.storedectionshow= true;
    this.editProfile=true;
    });
    console.log(this.deliveryform.value)
  }
  Localdeliverysubmit(){
    this.Localdelivery=false;
    this.storedeliveryshow = false;
    this.storedectionshow= false;
    this.restaurantdeliveryshow=false;
    this.restaurantdectionshow=false;
    this.deliveryservice.localchargesupdate(this.Localdeliveryform.value).subscribe((next:any)=>{
      this.Getfulldeliveryinfos();
this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
this.editProfile = !this.editProfile;
this.editAbout = !this.editAbout;
   
    this.storedeliveryshow = true;
    this.storedectionshow= true;
    this.editProfile=true;
    });
    console.log(this.deliveryform.value)
  }localchargesupdate
  updaterestaurantdeduction(){
    debugger;
    this.storedeliveryshow = false;
    this.storedectionshow= false;
    this.restaurantdeliveryshow=false;
    this.restaurantdectionshow=false;
    this.editAbout1=true;
    this.deliveryservice.updaterestperson(this.restdelivery1form.value).subscribe((next:any)=>{
      this.Getfulldeliveryinfos();
this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
this.editProfile = !this.editProfile;
this.editAbout = !this.editAbout;
   
    this.storedeliveryshow = true;
    this.storedectionshow= true;
    this.editProfile=true;
    });
    console.log(this.deliveryform.value)
  }
  updaterestpersantage(){
    debugger;
    this.storedeliveryshow = true;
    this.storedectionshow= true;
    this.editAbout1=true;
    this.editProfile = !this.editProfile;
    this.editAbout = !this.editAbout;

    this.deliveryservice.updateresdelivert(this.restdeliveryform.value).subscribe((next:any)=>{
      this.Getfulldeliveryinfos();
this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
this.editProfile = !this.editProfile;
    });
    console.log(this.deliveryform.value)
  }
  updaterestaurantdelivery(){
    debugger;
    this.storedeliveryshow = false;
    this.storedectionshow= false;
    this.restaurantdeliveryshow=false;
    this.restaurantdectionshow=false;
 
    this.deliveryservice.Updatedeliveryfair(this.restdeliveryform.value).subscribe((next:any)=>{
      this.Getfulldeliveryinfos();
this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
this.editProfile = !this.editProfile;
    });
    console.log(this.restdeliveryform.value)
  }
  storedetuctupdate(){
    this.storedeliveryshow = false;
    this.storedectionshow= false;
    this.restaurantdeliveryshow=false;
    this.restaurantdectionshow=false;
   
    this.deliveryservice.updatestorededuction(this.Grocerydeductionform.value).subscribe((next:any)=>{
      this.Getfulldeliveryinfos();
this.storedeliveryshow = false;
this.storedectionshow= false;
this.editProfileIcon = (this.editProfileIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
this.editProfile = !this.editProfile;
this.editAbout = !this.editAbout;
    this.editProfile=true;
    });
    console.log(this.Grocerydeductionform.value)
  }
  Getfulldeliveryinfos(){
    debugger;
    this.deliveryservice.GetDeliveryfairFullinfo().subscribe((next:any) => {
      this.chargesdata=null;
      this.chargesdata=next;
     
      this.storedeliverydata=next.grocerydelivery;
      this.storepersontageydata=next.grocerydeduction;
      this.restaurantdeliverydata=next.restaurantdeduction;
  
    this.localdeliveryfare=next.localDeliveryfair;
      console.log(this.chargesdata)
    
    }, error => {
      console.log(error);
    });
  }
  getdeliveryfair(){
    debugger;
    this.deliveryservice.GetDeliveryfair().subscribe((next:any) => {
      this.chargesdata=null;
      this.chargesdata=next;
       this.storedeliverydata=next.grocerydelivery;
       this.storepersontageydata=next.grocerydeduction;
       this.Restaurantdeliverydata=next.restaurantdelivery;
       this.restaurantdeliverydata=next.restaurantdeduction;
       this.localdeliveryfare=next.localDeliveryfair;
      console.log(this.storedeliverydata)
    
    }, error => {
      console.log(error);
    });
  }
  getpackage(){
    debugger;
    this.deliveryservice.GetPackage().subscribe((next:any) => {
      this.packagedata=null;
      this.packagedata=next.allpackages;
       
      this.storedeliverydata=next.grocerydelivery;
      this.storepersontageydata=next.grocerydeduction;
     
     console.log(next);
     
      console.log()
    
    }, error => {
      console.log(error);
    });
  }
  updatePackage(){
    this.deliveryservice.Updatepackage(this.packageform.value).subscribe((next:any)=>{
      this.getpackage();
      this.editAboutIcon = (this.editAboutIcon === 'icofont-close') ? 'icofont-edit' : 'icofont-close';
    this.editAbout = !this.editAbout;
          });
          console.log(this.deliveryform.value)
  }
}
