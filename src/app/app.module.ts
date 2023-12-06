import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { EuOrderListModule } from "projects/eu.libraries/src/lib/components/eu-order-list/eu-order-list.module";
import { OrderListComponent } from './components/order-list/order-list.component';



@NgModule({
  declarations: [AppComponent, OrderListComponent],
  imports: [BrowserModule, EuOrderListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
