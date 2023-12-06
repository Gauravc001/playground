import { sandboxOf } from "angular-playground";
import { OrderListComponent } from "./order-list.component";
import { EuOrderListModule } from "eu-library";

const sandboxConfig = {
  declarations: [OrderListComponent],
  imports: [EuOrderListModule],
};

export default sandboxOf(OrderListComponent, sandboxConfig)
  .add("Basic", {
    template: `<order-list></order-list>`,
  })
  .add("Filter", {
    template: `<order-list [filterBy]="'name'"></order-list>`,
  })
  .add("Drag drop", {
    template: `<order-list [dragdrop]="true"></order-list>`,
  });
