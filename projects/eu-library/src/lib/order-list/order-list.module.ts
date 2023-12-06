import { NgModule } from "@angular/core";

import { OrderListModule } from "primeng/orderlist";
import { EuOrderListComponent } from "./order-list.component";

@NgModule({
  declarations: [EuOrderListComponent],
  imports: [OrderListModule],
  exports: [EuOrderListComponent, OrderListModule],
})
export class EuOrderListModule {}
