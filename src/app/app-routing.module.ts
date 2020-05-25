import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MenuItemsComponent } from "../app/components/menu-items/menu-items.component";
import { DashboardComponent } from "../app/components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "",
    component: MenuItemsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
