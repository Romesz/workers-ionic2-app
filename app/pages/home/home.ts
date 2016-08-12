import {Component} from "@angular/core";
import {Modal, Platform, NavParams, ViewController, NavController} from "ionic-angular";

import {WorkerNumConfig, ItemConfig, WorkerConfig} from "../../Interfaces";
import {WorkersClass} from "../../WorkerService";

/*
 * HomePage component
*/
@Component({
  templateUrl: "build/pages/home/home.html",
  providers: [WorkersClass]
})
export class HomePage {
  workers: Array<WorkerConfig>;

  constructor(private navController: NavController, private workersClass: WorkersClass) {
    this.workers = this.workersClass.Get();
  }

  openModal(workerNum: WorkerNumConfig) {
    let modal = Modal.create(ModalsContentPage, workerNum);
    this.navController.present(modal);
  }
}

/*
 * ModalsContentPage component
*/
@Component({
  templateUrl: "./build/pages/home/modal.html",
  providers: [WorkersClass]
})
class ModalsContentPage {
  worker: WorkerConfig;
  workers: Array<WorkerConfig>;

  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController,
      public workersClass: WorkersClass
  ) {
    this.workers = this.workersClass.Get();
    this.worker = this.workers[this.params.get("charNum")];
  }


  changeValue(e, name) {
    let chosenChar: Array<ItemConfig> = this.workers[this.params.get("charNum")].items;

    let counter: number = 0;
    for (let val of chosenChar) {
      if (val.title === name) {
        this.workers[this.params.get("charNum")].items[counter].note = e;
        break;
      }
      counter++;
    }
    this.workersClass.Set(this.workers);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
