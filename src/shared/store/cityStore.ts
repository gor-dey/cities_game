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

  static mockOpponentCall = async (city: City) => {
    const cityName = city.name || "";
    const { citiesList, isYourAnswer } = CityStore.instance;

    const opponentAnswer = await MockOpponentFunction(cityName, citiesList);

    if (!opponentAnswer) return null;

    citiesList.push(opponentAnswer);
    CityStore.instance.isYourAnswer = !isYourAnswer;
  };

  static isCityExist = (cityName: string) => {
    const lowercaseCityName = cityName.toLowerCase();
    return citiesBase.some(
      (city) => city.city.toLowerCase() === lowercaseCityName
    );
  };

  setNewCity = (city: City) => {
    if (!city.name) return null;
    if (!CityStore.isCityExist(city.name)) return null;
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

  setFinalResults = () => {
    if (!this.citiesList.length) return null;

    this.finalResults.lastCity =
      this.citiesList[this.citiesList.length - 1].name;
    this.finalResults.isYouWin =
      this.citiesList[this.citiesList.length - 1].isYourAnswer;
    this.finalResults.totalCount = this.citiesList.length;
  };

  reset = () => {
    this.newCity = { name: "", isYourAnswer: true };
    this.citiesList = [];
    this.isYourAnswer = true;
  };
}
