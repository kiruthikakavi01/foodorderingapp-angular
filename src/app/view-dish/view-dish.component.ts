import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-dish',
  templateUrl: './view-dish.component.html',
  styleUrls: ['./view-dish.component.css']
})
export class ViewDishComponent implements OnInit {
  id!:any;
  dish!:any;
  constructor(private http:HttpClient,private route:ActivatedRoute) {
    this.id=this.route.snapshot.params["id"];
   }

  ngOnInit(): void {
    this.getDishById();
  }
  getDishById(){
    const url="http://localhost:9009/dishes/"+this.id;
    this.http.get(url).subscribe((res)=>{
      this.dish=res;
    },err=>{
    }
    )
  }
  getDishIngredients(dish:any){
    return dish.ingredients.split(",");
  }
}
