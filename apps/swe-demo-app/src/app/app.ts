import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarContainer } from "@swe-demo/swe-demo-feature";

@Component({
  imports: [RouterModule, NavbarContainer],
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected title = "swe-demo";
}