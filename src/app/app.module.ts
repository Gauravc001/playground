import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { ButtonModule } from "primeng/button";
import {
  EuCardModule,
  EuOrderListModule,
  EuSidebarModule,
  EuSkeletonModule,
} from "eu-library";
import { OrderListComponent } from "./components/order-list/order-list.component";
import { CardComponent } from "./components/card/card.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SkeletonComponent } from "./components/skeleton/skeleton.component";

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    CardComponent,
    SidebarComponent,
    SkeletonComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    EuOrderListModule,
    EuCardModule,
    EuSidebarModule,
    EuSkeletonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
