import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private base_url = 'http://localhost:52947/api';
  constructor(private http: HttpClient) { }

  getCategory(): Observable<any>{
    return this.http.get<any>(`${this.base_url}/category`)
  }
  getBookByCategory(catid:any):Observable<any>{
    return this.http.get(`${this.base_url}/book?catId=${catid}`)
  }
  getBookList(): Observable<any>{
    return this.http.get<any>(`${this.base_url}/book`)
  }
  getCart(userid:any):Observable<any>{
    return this.http.get(`${this.base_url}/cart?userId=${userid}`);
  }
  getWishlist(userid:any):Observable<any>{
    return this.http.get(`${this.base_url}/wishlist?userId=${userid}`);
  }
  AddToCart(userid:any,bookid:any):Observable<any>{
    return this.http.post(`${this.base_url}/cart?userid=${userid}&bookid=${bookid}`,userid,bookid);
  }
  AddToWishlist(uid:any,bid:any):Observable<any>{
    return this.http.post(`${this.base_url}/wishlist?uid=${uid}&bid=${bid}`,uid,bid);
  }
  MakeOrder(order:any):Observable<any>{
    return this.http.post(`${this.base_url}/order`,order);
  }
  AddBooks(oid:any,bid:any):Observable<any>{
    return this.http.post(`${this.base_url}/order?oid=${bid}&bid=${oid}`,oid,bid);
  }
  ViewOrder(oid:any):Observable<any>{
    return this.http.get(`${this.base_url}/order?orderid=${oid}`);
  }
  TotalPrice(oid:any):Observable<any>{
    return this.http.get(`${this.base_url}order?oid=${oid}`);
  }
  DeleteFromWishlist(userid:any,bookid:any): Observable<any>{
    return this.http.delete(`${this.base_url}/wishlist?userid=${userid}&bookid=${bookid}`);
  }
  DeleteFromCart(userid:any,bookid:any): Observable<any>{
    return this.http.delete(`${this.base_url}/cart?userid=${userid}&bookid=${bookid}`);
  }
}
