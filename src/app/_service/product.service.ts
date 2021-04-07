import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "./../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl = environment.apiurl + 'ProductApi/';
constructor(private http: HttpClient) {
  
};
GetCategoryProduct(dto:any){
  return this.http.post<any>(this.baseUrl+ 'CategoryWiseProduct',dto)
};
postcategorey(form: any){
  return this.http.post<any>(this.baseUrl+'AddCategory', form)
};
GetCategorey(){
  return this.http.get<any>(this.baseUrl+'AllCategories')
};
GetAllProducts(){
  return this.http.get<any>(this.baseUrl+'AllProducts')
}
}
