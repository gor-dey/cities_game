import { City, citiesBase, lastLetterFunc } from "@shared";

export const MockOpponentFunction = (cityName: string, citiesList: City[]) => {
  const lastLetter = lastLetterFunc(cityName);

  const answer = citiesBase.find((city) => {
    const firstLetterOfCity = city.city[0].toLowerCase();
    const isCityNotInList = !citiesList.some(
      (listCity) => listCity.name?.toLowerCase() === city.city.toLowerCase()
    );
    return firstLetterOfCity === lastLetter && isCityNotInList;
  });

  return { name: answer ? answer.city : null, isYourAnswer: false };
};
