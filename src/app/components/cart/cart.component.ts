import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  bookList: any[] = [];
  userid=localStorage.getItem('email');
  constructor(private dataService : DataService, private router: Router) {
    this.dataService.getCart(this.userid).subscribe((response:any)=>{
      console.log(response)
      this.bookList = response;
    })
   }

  ngOnInit(): void {
  }
  deleteBook(bookId: any){
    this.dataService.DeleteFromCart(this.userid,bookId).subscribe((response:any)=>{
      console.log(response);})
      this.router.navigateByUrl('cart')
  }
}
