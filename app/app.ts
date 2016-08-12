import {Component} from "@angular/core";
import {MenuController, Platform, ionicBootstrap} from "ionic-angular";

import {HomePage} from "./pages/home/home";
import {AddWorkerPage} from "./pages/addworker/addworker";

@Component({
  template: `
    <ion-menu [content]="content">
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
      <ion-content>
        <ion-list>
          <button ion-item (click)="openPage(HomePage)">
            Home
          </button>
          <button ion-item (click)="openPage(AddWorkerPage)">
            Add Worker
          </button>
        </ion-list>
      </ion-content>
    </ion-menu>

    <ion-nav id="nav" #content [root]="rootPage"></ion-nav>`
})
class MyApp {

  private rootPage: Function = HomePage;
  private HomePage: Function = HomePage;
  private AddWorkerPage: Function = AddWorkerPage;

  constructor(
    private app: Platform,
    private menu: MenuController) {}

  public openPage(page) {
    // Reset the nav controller to have just this page
    // we wouldn't want the back button to show in this scenario
    this.rootPage = page;

    // close the menu when clicking a link from the menu
    this.menu.close();
  }
}

ionicBootstrap(MyApp);
