import { Component } from "@angular/core";
import { Order, Position } from "eu-library";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "Playground";
  public filterBy: string = "name";
  public dragdrop: boolean = false;
  public products: Order[] = [
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

  public sidebarVisible = false;
  public position: Position = Position.Left;
  public icon = 'pi-arrow-right';
}
