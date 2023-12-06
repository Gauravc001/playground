import { sandboxOf } from 'angular-playground';
import { ProductListComponent } from './product-list.component';
import { OrderListModule } from 'primeng/orderlist';

export default sandboxOf(ProductListComponent, {
  imports: [OrderListModule],
}).add('Basic', {
  template: `<app-product-list></app-product-list>`,
}).add('Filter', {
  template: `<app-product-list [filterBy]="'name'"></app-product-list>`,
}).add('Drag drop', {
  template: `<app-product-list [dragdrop]="true"></app-product-list>`,
});
