import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Catalog1Component } from './components/catalog/catalog1/catalog1.component';
import { Catalog2Component } from './components/catalog/catalog2/catalog2.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { ShoppinCardComponent } from './components/shoppin-card/shoppin-card.component';

const routes: Routes = [
  {path: 'landing', component: LandingComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'catalog1', component: Catalog1Component},
  {path: 'shoppinCard', component: ShoppinCardComponent},
  {path: 'catalog2', component: Catalog2Component},
  {path: 'productInfo', component: ProductInfoComponent},
  {path: 'profile',component: ProfileComponent},
  {path: 'contact', component: ContactComponent},

  { path: '', redirectTo: '/landing', pathMatch: 'full'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
