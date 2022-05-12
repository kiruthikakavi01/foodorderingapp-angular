import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListmenuComponent } from './listmenu/listmenu.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { ListVegComponent } from './list-veg/list-veg.component';
import { AddDishComponent } from './add-dish/add-dish.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ProfileComponent } from './profile/profile.component';
import { UpdateDishComponent } from './update-dish/update-dish.component';
import { DisplayDishComponent } from './display-dish/display-dish.component';
import { ViewDishComponent } from './view-dish/view-dish.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ListmenuComponent,
    ListUserComponent,
    ViewUserComponent,
    ListVegComponent,
    AddDishComponent,
    
    ProfileComponent,
         UpdateDishComponent,
         DisplayDishComponent,
         ViewDishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),// ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
