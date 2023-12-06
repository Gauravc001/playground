import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { OrderListModule } from 'primeng/orderlist';

@NgModule({
  declarations: [AppComponent, ProductListComponent],
  imports: [BrowserModule, AppRoutingModule, OrderListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}