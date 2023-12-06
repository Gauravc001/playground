import { sandboxOf } from 'angular-playground';
import { EuOrderListComponent } from './eu-order-list.component';
import { EuOrderListModule } from './eu-order-list.module';

export default sandboxOf(EuOrderListComponent, {
  imports: [EuOrderListModule],
}).add('Basic', {
  template: `<app-product-list></app-product-list>`,
}).add('Filter', {
  template: `<app-product-list [filterBy]="'name'"></app-product-list>`,
}).add('Drag drop', {
  template: `<app-product-list [dragdrop]="true"></app-product-list>`,
});
