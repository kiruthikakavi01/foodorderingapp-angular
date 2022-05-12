import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDishComponent } from './add-dish/add-dish.component';
import { AuthGuard } from './auth.guard';
import { DisplayDishComponent } from './display-dish/display-dish.component';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListmenuComponent } from './listmenu/listmenu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RoleGuard } from './role.guard';
import { UpdateDishComponent } from './update-dish/update-dish.component';
import { ViewDishComponent } from './view-dish/view-dish.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'listmenu',component:ListmenuComponent},
  {path:'list-user',component:ListUserComponent,canActivate:[AuthGuard,RoleGuard]},
  {path:'view-user',component:ViewUserComponent,canActivate:[AuthGuard]},
  {path:'add-dish',component:AddDishComponent},
  {path:'update-dish/:id',component:UpdateDishComponent},
  {path:'display-dish',component:DisplayDishComponent},
  {path:'view-dish/:id',component:ViewDishComponent},
  {path:'',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
