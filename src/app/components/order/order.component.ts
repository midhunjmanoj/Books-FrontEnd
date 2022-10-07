import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  userid=localStorage.getItem('userid');
  books:any[]=[];
  totalprice:any;
  constructor(private dataService:DataService) {
    //this.dataService.getOrder(this.user))
   }

  ngOnInit(): void {
  }

}
