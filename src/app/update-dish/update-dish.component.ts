import{HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-dish',
  templateUrl: './update-dish.component.html',
  styleUrls: ['./update-dish.component.css']
})
export class UpdateDishComponent implements OnInit {
  menu:any;
  id:any;
  constructor(private http:HttpClient,private toastr:ToastrService,private route:ActivatedRoute) {
    this.id=this.route.snapshot.params["id"];
   }

  ngOnInit(): void {
    this.findById();
  }
  findById(){
    const url="http://localhost:9009/dishes/"+this.id;
    this.http.get(url).subscribe((res)=>{
      this.menu = res;
    })
  }
  updateDish(){

    console.log(this.menu);

    const url="http://localhost:9009/dishes/"+this.id;
    this.http.put(url,this.menu).subscribe((res)=>{
      this.toastr.success('Dish Updated Successfully....');
     // alert("Dish Updated..");
    })
  }
}
