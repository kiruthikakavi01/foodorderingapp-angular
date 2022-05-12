import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailId!:string;
  password!:string;

  constructor(private http:HttpClient,private toastr:ToastrService,private  router:Router) { }

  ngOnInit(): void {
    //this.login();
  }
login(){
  const userObj={
    "email":this.emailId,
    "password":this.password
};
let message!:string
const url="http://localhost:9009/users/login";
    this.http.post(url,userObj,{responseType:'json'}).subscribe((res:any)=>{
      console.log(res);
     

      if(res.message == null){
        this.toastr.error('Login failed!');

      }else{
        this.toastr.success('Login success!..');
        this.router.navigateByUrl('listmenu');
      }
    },(err)=>{
      console.log(err);
      this.toastr.error('Login failed!');
    })
}
}
