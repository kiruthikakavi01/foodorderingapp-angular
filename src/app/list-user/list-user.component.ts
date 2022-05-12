import{HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.displayAllUser();
  }
users!:any;
displayAllUser(){
  const url="http://localhost:9009/users/list";
    this.http.get(url).subscribe((res)=>{
      this.users = res;
    },err=>{
    }
    )
}
}
