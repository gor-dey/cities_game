import { makeAutoObservable } from "mobx";
import { MockOpponentFunction, isCyrillic, lastLetterFunc } from "@shared";
import { City } from "@shared";

export class CityStore {
  newCity: City = { name: "", isYourAnswer: true };
  citiesList: City[] = [];
  isYourAnswer: boolean = true;

  constructor() {
    makeAutoObservable(this);
    CityStore.instance = this;
  }

  static instance: CityStore;

  static mockOpponentCall = (city: City) => {
    const cityName = city.name || "";
    const { citiesList } = CityStore.instance;

    const opponentAnswer = MockOpponentFunction(cityName, citiesList);

    if (!opponentAnswer) return null;

    citiesList.push(opponentAnswer);
  };

  setNewCity = (city: City) => {
    if (!city.name) {
      return null;
    }

    if (!isCyrillic(city.name)) return null;

    if (this.citiesList.some((existingCity) => existingCity.name === city.name))
      return null;

    const lastCity = this.citiesList[this.citiesList.length - 1];

    if (lastCity) {
      const lastLetterOfLastCity = lastLetterFunc(lastCity.name!);
      const firstLetterOfNewCity = city.name[0].toLowerCase();

      if (lastLetterOfLastCity !== firstLetterOfNewCity) {
        return null;
      }
    }

    this.newCity = city;
    this.citiesList.push(city);
    this.isYourAnswer = !this.isYourAnswer;

    CityStore.mockOpponentCall(city);

    return city;
  };
}
