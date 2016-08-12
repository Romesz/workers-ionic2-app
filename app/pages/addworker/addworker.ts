import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

import {WorkerNumConfig, ItemConfig, WorkerConfig} from "../../Interfaces";
import {WorkersClass} from "../../WorkerService";

import {HomePage} from "../home/home";

@Component({
  templateUrl: "build/pages/addworker/addworker.html",
  providers: [WorkersClass]
})
export class AddWorkerPage {
  workers: Array<WorkerConfig>;

  constructor(
    private nav: NavController,
    private workersClass: WorkersClass
  ) {
    this.workers = this.workersClass.Get();
  }

  addWorker(name: string) {
    if (name.length <= 0)
        return;

    let workerName: WorkerConfig = {
      name: name,
      items: [
        { title: "Job Title", note: "" },
        { title: "Age", note: "" },
        { title: "Nickname", note: "" }
      ]
    };
    this.workers.push(workerName);
    this.workersClass.Set(this.workers);

    this.nav.push(HomePage);
  }

}
