import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  catId:any;
  bookList: any[] = [];
  userid = localStorage.getItem('email');
  constructor(private dataService: DataService, private router: Router,private activatedRoute: ActivatedRoute) {
    this.catId = this.activatedRoute.snapshot.paramMap.get('catId');
    this.dataService.getBookByCategory(this.catId).subscribe((response: any)=>{
      console.log(response);
      this.bookList = response;
    })
  } 

  ngOnInit(): void {
  }
  AddtoCart(BookId: any) {
    
    this.dataService.AddToCart(this.userid,BookId).subscribe((response:any)=>{
      console.log(response);})
  }
  AddtoWishlist(BookId: any) {
    
  }

}
