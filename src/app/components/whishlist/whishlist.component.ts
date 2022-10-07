import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-whishlist',
  templateUrl: './whishlist.component.html',
  styleUrls: ['./whishlist.component.css']
})
export class WhishlistComponent implements OnInit {
  bookList: any[] = [];
  userid=localStorage.getItem('email');
  constructor(private dataService : DataService, private router: Router) {
    this.dataService.getWishlist(this.userid).subscribe((response:any)=>{
      this.bookList = response;
    })
   }

  ngOnInit(): void {
  }
  deleteBook(bookId: any){
    this.dataService.DeleteFromWishlist(this.userid,bookId).subscribe((response:any)=>{
      console.log(response);
  })
  }
}
