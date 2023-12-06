import { Component, Input } from "@angular/core";
import { Order } from "projects/eu.libraries/src/lib/models/order.model";

@Component({
  selector: "order-list",
  templateUrl: "./order-list.component.html",
  styleUrls: ["./order-list.component.css"],
})
export class OrderListComponent {
  @Input() public filterBy: string = "";
  @Input() public dragdrop: boolean = false;
  @Input() public products: Order[] = [
    {
      image: "bamboo-watch.jpg",
      name: "Bamboo Watch",
      price: "65",
      category: "Accessories",
    },
    {
      image: "blue-band.jpg",
      name: "Blue Band",
      price: "79",
      category: "Fitness",
    },
    {
      image: "blue-t-shirt.jpg",
      name: "Blue T-Shirt",
      price: "29",
      category: "Clothing",
    },
    {
      image: "bracelet.jpg",
      name: "Bracelet",
      price: "15",
      category: "Accessories",
    },
    {
      image: "game-controller.jpg",
      name: "Game Controller",
      price: "99",
      category: "Electronics",
    },
  ];
}
