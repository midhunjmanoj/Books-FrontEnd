import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../services/data.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: any[] = [];
  constructor(private dataService: DataService, private router: Router) { 
    this.dataService.getCategory().subscribe((response: any)=>{
      this.categories = response;
      console.log(response);
    }
    )
   }

  ngOnInit(): void {
  }
  onClickHandler(category: any){
    this.router.navigate(['viewcategory/'+category]);
  }

}
