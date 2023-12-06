import { Component, Input } from "@angular/core";
import { Order } from "../../api/order.interface";

@Component({
  selector: "eu-order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.scss"],
})
export class EuOrderListComponent {
  @Input() public filterBy: string = "";
  @Input() public dragdrop: boolean = false;
  @Input() public products: Order[] = [];
}
