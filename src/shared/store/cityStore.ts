import { makeAutoObservable } from "mobx";
import {
  FinalResultsType,
  MockOpponentFunction,
  isCyrillic,
  lastLetterFunc,
  City,
  citiesBase,
} from "@shared";

export class CityStore {
  newCity: City = { name: "", isYourAnswer: true };
  citiesList: City[] = [];
  isYourAnswer: boolean = true;

  finalResults: FinalResultsType = {
    lastCity: "",
    isYouWin: true,
    totalCount: 0,
  };

  constructor() {
    makeAutoObservable(this);
    CityStore.instance = this;
  }

  static instance: CityStore;

  static mockOpponentCall = async (city: City): Promise<void | null> => {
    const { citiesList, isYourAnswer } = CityStore.instance;
    const opponentAnswer = await MockOpponentFunction(
      city.name || "",
      citiesList
    );
    if (opponentAnswer) {
      citiesList.push(opponentAnswer);
      CityStore.instance.isYourAnswer = !isYourAnswer;
    }
  };

  static isCityExist = (cityName: string): boolean => {
    return citiesBase.some(
      (city) => city.city.toLowerCase() === cityName.toLowerCase()
    );
  };

  setNewCity = (city: City): City | null => {
    if (
      !city.name ||
      !CityStore.isCityExist(city.name) ||
      !isCyrillic(city.name)
    )
      return null;

    const lastCity = this.citiesList[this.citiesList.length - 1];
    if (
      lastCity &&
      lastLetterFunc(lastCity.name!) !== city.name[0].toLowerCase()
    )
      return null;

    this.newCity = city;
    this.citiesList.push(city);
    this.isYourAnswer = !this.isYourAnswer;
    CityStore.mockOpponentCall(city);
    return city;
  };

  setFinalResults = (): void | null => {
    if (!this.citiesList.length) return null;

    const lastCity = this.citiesList[this.citiesList.length - 1];
    this.finalResults = {
      lastCity: lastCity.name,
      isYouWin: lastCity.isYourAnswer,
      totalCount: this.citiesList.length,
    };
  };

  reset = (): void => {
    this.newCity = { name: "", isYourAnswer: true };
    this.citiesList = [];
    this.isYourAnswer = true;
  };
}
