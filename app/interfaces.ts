export interface WorkerNumConfig {
  charNum: Number;
}

export interface ItemConfig {
  note: String;
  title: String;
}

export interface WorkerConfig {
  items: Array<ItemConfig>;
  name: String;
}
