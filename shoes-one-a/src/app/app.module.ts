import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { Catalog1Component } from './components/catalog/catalog1/catalog1.component';

import { ShoppinCardComponent } from './components/shoppin-card/shoppin-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { Catalog2Component } from './components/catalog/catalog2/catalog2.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    Catalog1Component,
   
    ShoppinCardComponent,
    ContactComponent,
    Catalog2Component,
    ProductInfoComponent,
    ProfileComponent,
    FooterComponent,
    

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
