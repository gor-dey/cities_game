import { action, makeObservable, observable } from "mobx";
import {
  FinalResultsType,
  MockOpponentFunction,
  isCyrillic,
  lastLetterFunc,
  City,
  citiesBase,
} from "@shared";

export class CityStore {
  @observable newCity: City = { name: "", isYourAnswer: true };
  @observable citiesList: City[] = [];
  @observable isYourAnswer: boolean = true;
  @observable finalResults: FinalResultsType = {
    lastCity: "",
    isYouWin: true,
    totalCount: 0,
  };

  constructor() {
    makeObservable(this);
  }

  mockOpponentCall = async (city: City): Promise<void | null> => {
    const opponentAnswer = await MockOpponentFunction(
      city.name || "",
      this.citiesList
    );
    if (opponentAnswer) {
      this.citiesList.push(opponentAnswer);
      this.isYourAnswer = !this.isYourAnswer;
    }
  };

  isCityExist = (cityName: string): boolean =>
    citiesBase.some(
      (city) => city.city.toLowerCase() === cityName.toLowerCase()
    );

  @action setNewCity = (city: City): City | null => {
    if (!city.name || !this.isCityExist(city.name) || !isCyrillic(city.name))
      return null;

    const lastCity = this.citiesList[this.citiesList.length - 1];

    if (
      lastCity &&
      lastLetterFunc(lastCity.name!) !== city.name[0].toLowerCase()
    ) {
      return null;
    }

    this.newCity = city;
    this.citiesList.push(city);
    this.isYourAnswer = !this.isYourAnswer;
    this.mockOpponentCall(city);

    return city;
  };

  @action setFinalResults = (): void | null => {
    if (!this.citiesList.length) return null;

    const lastCity = this.citiesList[this.citiesList.length - 1];
    this.finalResults.lastCity = lastCity.name;
    this.finalResults.isYouWin = lastCity.isYourAnswer;
    this.finalResults.totalCount = this.citiesList.length;
  };

  @action reset = (): void => {
    this.newCity = { name: "", isYourAnswer: true };
    this.citiesList = [];
    this.isYourAnswer = true;
  };
}
