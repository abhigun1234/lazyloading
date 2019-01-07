import { NgModule,ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import {Routes,RouterModule} from '@angular/router'


const routes :Routes=[{path:'contactus',component:ContactusComponent},
{path:'home',component:HomeComponent

},{path:"lazy1",
loadChildren:'./lazy/lazy.module#LazyModule'}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




export const routing=[HomeComponent,ContactusComponent]