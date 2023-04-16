import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BlogComponent } from './blog/blog.component';
import { ConatctComponent } from './conatct/conatct.component';
import { BodyComponent } from './furniture/furniture.component';
import { HomeComponent } from './home/home.component';
import { MeubleComponent } from './meuble/meuble.component';


const routes: Routes = [
  {path :"", redirectTo:"body",pathMatch:"full"},
  {path: "home",component:HomeComponent},
  {path: "body",component:BodyComponent},
  {path:"aboutus",component:AboutUsComponent,pathMatch:"full"},
  {path:"blog",component:BlogComponent},
  {path: "contact",component:ConatctComponent},
  {path: "meuble",component:MeubleComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
