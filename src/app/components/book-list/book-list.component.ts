import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList: any[] = [];
  userid = localStorage.getItem('email');
  constructor(private dataService: DataService, private router: Router){
    this.dataService.getBookList().subscribe((response: any)=>{
      console.log(response);
      this.bookList = response;
    })
  } 

  
  AddtoCart(BookId: any) {
    this.dataService.AddToCart(this.userid,BookId).subscribe((response:any)=>{
      console.log(response);})
  }
  AddtoWishlist(BookId: any) {
    this.dataService.AddToWishlist(this.userid,BookId).subscribe((response:any)=>{
      console.log(response);})
  }

  ngOnInit(): void {
  }

}
