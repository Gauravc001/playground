import { Component, Input } from "@angular/core";
import { Position } from "eu-library";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent {
  @Input() public sidebarVisible = false;
  @Input() public position: Position = Position.Left;
  @Input() public icon = '';
}
