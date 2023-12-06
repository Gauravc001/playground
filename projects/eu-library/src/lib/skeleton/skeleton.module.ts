import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SkeletonModule } from "primeng/skeleton";
import { EuSkeletonComponent } from "./skeleton.component";

@NgModule({
  declarations: [EuSkeletonComponent],
  imports: [CommonModule, SkeletonModule],
  exports: [EuSkeletonComponent, SkeletonModule],
})
export class EuSkeletonModule {}
