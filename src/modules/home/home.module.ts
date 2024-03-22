import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../../components/home/home.component';
import { MaterialModule } from '../material.module';
import { ItemComponent } from '../../components/item/item.component';
import { CartComponent } from '../../components/cart/cart.component';
import { CheckoutComponent } from '../../components/checkout/checkout.component';


@NgModule({
  declarations: [
    HomeComponent,
    ItemComponent,
    CartComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule, MaterialModule,
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
