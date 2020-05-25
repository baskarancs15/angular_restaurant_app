import { Component, OnInit } from "@angular/core";
import RESTURANT_DATA from "../../../data/restaurant.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  private data: any;
  private restaurantName: any;
  private restaurantLogo: any;
  constructor() {
    this.data = RESTURANT_DATA;
    console.log(this.data);
  }

  ngOnInit() {
    this.restaurantName = this.data.restaurantinfo.name;
    this.restaurantLogo = this.data.restaurantinfo.logo;
  }
}
