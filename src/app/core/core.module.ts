import { NgModule } from '@angular/core';
import { OrderService } from 'app/core/order.service';
import { RestaurantsService } from 'app/core/restaurants.service';
import { ShoppingCartService } from 'app/core/shopping-cart.service';

@NgModule({
  providers : [OrderService, RestaurantsService, ShoppingCartService]
})
export class CoreModule { }
