import { Component, OnInit } from "@angular/core";
import RESTAURANT_DATA from "../../../data/restaurant.js";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-menu-items",
  templateUrl: "./menu-items.component.html",
  styleUrls: ["./menu-items.component.css"]
})
export class MenuItemsComponent implements OnInit {
  private menuitems: any;
  private price: any;
  private data: any;
  private grandTotal: any;
  private quantity: any;
  private orderNo: any;
  private foodItem: any;
  constructor(private http: HttpClient) {
    this.data = RESTAURANT_DATA;
  }

  ngOnInit() {
    this.menuitems = this.data.restaurantinfo.menuitems;
  }

  selectMenuitem(event) {
    let index = event.target.value;
    this.foodItem = this.menuitems[index].name;
    this.price = this.menuitems[index].price;
    this.quantity = 0;
  }
  valuechange(quantityVal) {
    this.quantity = quantityVal;
    this.grandTotal = this.price * this.quantity;
  }

  saveOrder() {
    let data = {
      // orderNo: this.orderNo,
      foodItem: this.foodItem,
      price: this.price,
      quantity: this.quantity
    };
    this.http.post("http://localhost:3000/api/saveorder", data).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
