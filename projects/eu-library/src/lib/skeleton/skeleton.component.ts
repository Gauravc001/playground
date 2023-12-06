import { Component, Input } from "@angular/core";

@Component({
  selector: "eu-skeleton",
  templateUrl: "./skeleton.component.html",
  styleUrls: ["./skeleton.component.css"],
})
export class EuSkeletonComponent {
  @Input() public width = "";
  @Input() public height = "";
  @Input() public borderRadius = "";
}
