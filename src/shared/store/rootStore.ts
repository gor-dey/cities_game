import { makeAutoObservable } from "mobx";
import { CityStore } from "./cityStore";

class RootStore {
  CityStore = new CityStore();

  constructor() {
    makeAutoObservable(this);
  }
}

export const rootStore = new RootStore();
