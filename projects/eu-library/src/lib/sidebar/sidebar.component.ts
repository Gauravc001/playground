import { Component, Input } from "@angular/core";
import { Position } from "../../enum/position.enum";

@Component({
  selector: "eu-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class EuSidebarComponent {
  @Input() public sidebarVisible = false;
  @Input() public position: Position = Position.Left;
}
