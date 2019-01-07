import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LazyModule} from './lazy/lazy.module'
import { AppComponent } from './app.component';
import {routing} from './app-routing.module'
import {Router} from '@angular/router'
import {AppRoutingModule} from './app-routing.module';
import { HighlightDirective } from './hover.directive';
import { NewComponent } from './lazy/new.component';
import { MyDirective } from './my.directive'

@NgModule({
  declarations: [
    AppComponent,
    routing,
    HighlightDirective,
    NewComponent,
    MyDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
