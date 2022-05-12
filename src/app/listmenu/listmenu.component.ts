import{HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listmenu',
  templateUrl: './listmenu.component.html',
  styleUrls: ['./listmenu.component.css']
})
export class ListmenuComponent implements OnInit {

  constructor(private http:HttpClient,private toastr:ToastrService) { }

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
  
    remove(id:any){
      let cfm = confirm("Do you want to delete ?");
      if(cfm){
        const url="http://localhost:9009/dishes/" + id;
        this.http.delete(url).subscribe((res)=>{
          console.log(res);
          this.toastr.success('successfully deleted');
         
          
        },(err)=>{
          this.toastr.error('delete failed...');
        }
        )
      }
    }
}
