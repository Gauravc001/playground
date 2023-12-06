import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  @Input() public filterBy: string = '';
  @Input() public dragdrop: boolean = false;
  public products: Product[] = [];
  ngOnInit(): void {
    this.products = [
      {
        image: 'bamboo-watch.jpg',
        name: 'Bamboo Watch',
        price: '65',
        category: 'Accessories',
      },
      {
        image: 'blue-band.jpg',
        name: 'Blue Band',
        price: '79',
        category: 'Fitness',
      },
      {
        image: 'blue-t-shirt.jpg',
        name: 'Blue T-Shirt',
        price: '29',
        category: 'Clothing',
      },
      {
        image: 'bracelet.jpg',
        name: 'Bracelet',
        price: '15',
        category: 'Accessories',
      },
      {
        image: 'game-controller.jpg',
        name: 'Game Controller',
        price: '99',
        category: 'Electronics',
      },
    ];
  }
}
