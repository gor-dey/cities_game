import { City, citiesBase, lastLetterFunc } from "@shared";

export const MockOpponentFunction = async (
  cityName: string,
  citiesList: City[]
) => {
  const lastLetter = lastLetterFunc(cityName);

  const randomTimeout = Math.floor(Math.random() * 6000) + 2000;

  const result = await new Promise<{
    name: string | null;
    isYourAnswer: boolean;
  }>((resolve) => {
    setTimeout(() => {
      const answer = citiesBase.find((city) => {
        const firstLetterOfCity = city.city[0].toLowerCase();
        const isCityNotInList = !citiesList.some(
          (listCity) => listCity.name?.toLowerCase() === city.city.toLowerCase()
        );
        return firstLetterOfCity === lastLetter && isCityNotInList;
      });

      resolve({ name: answer ? answer.city : null, isYourAnswer: false });
    }, randomTimeout);
  });

  return result;
};
