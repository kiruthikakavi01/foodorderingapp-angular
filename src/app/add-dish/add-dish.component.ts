import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.css']
})
export class AddDishComponent implements OnInit {
dishName!:string;
dishType!:string;
price!:number;
hotelName!:string;
ingredients!:string;
imageUrl!:string;
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
addDish(){
  const menuObj={
      
    "dishName": this.dishName,
    "dishType":this.dishType,
    "price":this.price,
    "hotelName":this.hotelName,
    "ingredients":this.ingredients,
    "imageUrl":this.imageUrl

};
const url="http://localhost:9009/dishes/save";
    this.http.post(url,menuObj).subscribe((res)=>{
      console.log(res);
      alert("successfully added Dish");
    },(err)=>{
      console.log(err);
      alert("Unsuccessfully added Dish.......");
    })
}


}
