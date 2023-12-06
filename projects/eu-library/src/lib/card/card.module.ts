import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CardModule } from "primeng/card";
import { EuCardComponent } from "./card.component";

@NgModule({
  declarations: [EuCardComponent],
  imports: [CommonModule, CardModule],
  exports: [EuCardComponent, CardModule],
})
export class EuCardModule {}
