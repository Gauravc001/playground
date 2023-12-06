import { NgModule } from "@angular/core";

import { OrderListModule } from "primeng/orderlist";
import { EuOrderListComponent } from "./order-list.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [EuOrderListComponent],
  imports: [CommonModule, OrderListModule],
  exports: [EuOrderListComponent, OrderListModule],
})
export class EuOrderListModule {}
