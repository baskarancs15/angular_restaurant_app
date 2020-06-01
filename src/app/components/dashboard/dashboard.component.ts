import { Component, OnInit } from "@angular/core";
import RESTURANT_DATA from "../../../data/restaurant.js";
import USER_DATA from "../../../data/user.js";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  private data: any;
  private customerData: any;
  private restaurantName: any;
  private restaurantLogo: any;
  private menuitems: any;
  private price: any;
  private grandTotal: any;
  private quantity: any;
  private orderNo: any;
  private foodItem: any;
  private orders: any;
  private orderList: any;
  private total: any;
  constructor(private http: HttpClient) {
    this.data = RESTURANT_DATA;
    this.customerData = USER_DATA;
    console.log(this.customerData);
  }

  ngOnInit() {
    this.orderList = [];
    this.restaurantName = this.data.restaurantinfo.name;
    this.restaurantLogo = this.data.restaurantinfo.logo;
    this.menuitems = this.data.restaurantinfo.menuitems;
    this.numberGenerator();
  }

  numberGenerator() {
    this.orderNo = Math.floor(Math.random() * 100) + 1;
  }

  selectMenuitem(event) {
    let index = event.target.value;
    this.foodItem = this.menuitems[index].name;
    this.price = this.menuitems[index].price;
    this.quantity = 0;
  }
  valuechange(quantityVal) {
    this.quantity = quantityVal;
    this.total = this.price * this.quantity;
  }

  addItems() {
    this.orderList.push({
      // orderNo: Math.floor(Math.random() * 10),
      foodItem: this.foodItem,
      price: this.price,
      quantity: this.quantity,
      total: this.total
    });
    console.log(this.orderList);
    this.foodItem = this.menuitems;
    this.price = "";
    this.quantity = "";
    this.total = "";
  }

  // saveOrders() {
  //   this.http
  //     .post("http:localhost:3000/saveorder", this.orderList)
  //     .subscribe(res => {
  //       console.log(res);
  //     });
  // }
}
