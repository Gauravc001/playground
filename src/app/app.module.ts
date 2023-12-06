import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { OrderListComponent } from "./components/order-list/order-list.component";
import { EuOrderListModule } from "eu-library";

@NgModule({
  declarations: [AppComponent, OrderListComponent],
  imports: [BrowserModule, EuOrderListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
