import { Component, Input } from "@angular/core";
import { Order } from "../../models/order.model";

@Component({
  selector: "eu-order-list",
  templateUrl: "./eu-order-list.component.html",
  styleUrls: ["./eu-order-list.component.scss"],
})
export class EuOrderListComponent {
  @Input() public filterBy: string = "";
  @Input() public dragdrop: boolean = false;
  @Input() public products: Order[] = [];
}
