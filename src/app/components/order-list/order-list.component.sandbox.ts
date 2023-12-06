import { sandboxOf } from "angular-playground";
import { OrderListComponent } from "./order-list.component";
import { EuOrderListModule } from "eu-library";

const sandboxConfig = {
  declarations: [OrderListComponent],
  imports: [EuOrderListModule],
};

export default sandboxOf(OrderListComponent, sandboxConfig)
  .add("default", {
    template: `<order-list></order-list>`,
  })
  .add("filter", {
    template: `<order-list [filterBy]="'name'"></order-list>`,
  })
  .add("drag drop", {
    template: `<order-list [dragdrop]="true"></order-list>`,
  });
