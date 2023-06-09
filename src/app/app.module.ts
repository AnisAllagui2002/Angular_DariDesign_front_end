import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './furniture/furniture.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConatctComponent } from './conatct/conatct.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { MeubleComponent } from './meuble/meuble.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    AboutUsComponent,
    ConatctComponent,
    HomeComponent,
    BlogComponent,
    MeubleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
