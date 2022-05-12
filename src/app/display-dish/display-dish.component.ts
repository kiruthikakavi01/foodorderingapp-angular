import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-dish',
  templateUrl: './display-dish.component.html',
  styleUrls: ['./display-dish.component.css']
})
export class DisplayDishComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.displayAllMenu();
  }
  menus!:any;
  displayAllMenu(){
    const url="http://localhost:9009/dishes/list";
      this.http.get(url).subscribe((res)=>{
        console.log(res);
        this.menus = res;
      },err=>{
      }
      )
  }
}
