import {WorkerNumConfig, ItemConfig, WorkerConfig} from "./Interfaces";

/*
 * WORKERS global
*/
let WORKERS: Array<WorkerConfig> = [
  {
    name: "Joe Test",
    items: [
      { title: "Job Title", note: "FrontEnd developer" },
      { title: "Age", note: "26" },
      { title: "Nickname", note: "Joey" }
    ]
  },
  {
    name: "Seteven Example",
    items: [
      { title: "Job Title", note: "Tester" },
      { title: "Age", note: "35" },
      { title: "Nickname", note: "Steve" }
    ]
  }
];

export class WorkersClass {
  Get() {
    return WORKERS;
  }

  Set(value: Array<WorkerConfig>) {
    WORKERS = value;
  }
}
