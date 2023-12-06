import { Component, Input } from "@angular/core";

@Component({
  selector: "eu-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
})
export class EuCardComponent {
  @Input() public header = "";
  @Input() public subHeader = "";
  @Input() public advanced = false;
}
