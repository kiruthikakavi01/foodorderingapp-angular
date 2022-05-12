import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name!: string;
  emailId!: string;
  contactNumber!: number;
  password!: string;

  constructor(private http:HttpClient,private toastr:ToastrService,private  router:Router) { }

  ngOnInit(): void {
  }
  register() {
    const userObj={
      
        "name": this.name,
        "email":this.emailId,
        "contactNumber":this.contactNumber,
        "password":this.password
    
    };
    const url="http://localhost:9009/users/save";
    this.http.post(url,userObj).subscribe((res)=>{
      console.log(res);
      //alert("successfully Registered");
      this.toastr.success('Succeccfilly Registered');
      this.router.navigateByUrl('login');
     
    },(err)=>{
      console.log(err);
      this.toastr.error('Register failed!');
    })
  }
}

