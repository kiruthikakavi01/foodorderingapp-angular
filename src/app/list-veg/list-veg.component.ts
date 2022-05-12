import{HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-veg',
  templateUrl: './list-veg.component.html',
  styleUrls: ['./list-veg.component.css']
})
export class ListVegComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  // veg!:any;
  // displayAllVeg(){
  //   const url=""
  // }
}
