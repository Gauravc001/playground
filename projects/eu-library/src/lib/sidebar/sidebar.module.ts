import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SidebarModule } from "primeng/sidebar";
import { EuSidebarComponent } from "./sidebar.component";

@NgModule({
  declarations: [EuSidebarComponent],
  imports: [CommonModule, SidebarModule],
  exports: [EuSidebarComponent, SidebarModule],
})
export class EuSidebarModule {}
