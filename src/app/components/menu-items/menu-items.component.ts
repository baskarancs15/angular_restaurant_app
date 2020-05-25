import { Component, OnInit } from "@angular/core";
import RESTAURANT_DATA from "../../../data/restaurant.js";

@Component({
  selector: "app-menu-items",
  templateUrl: "./menu-items.component.html",
  styleUrls: ["./menu-items.component.css"]
})
export class MenuItemsComponent implements OnInit {
  private menuitems: any;
  private data: any;
  constructor() {
    this.data = RESTAURANT_DATA;
    console.log(this.data);
    this.menuitems = this.data.restaurantinfo.menuitems.forEach(element => {
      console.log(element.name);
    });
  }

  ngOnInit() {}
}
