import { City, citiesBase, lastLetterFunc } from "@shared";

interface MockOpponentResult {
  name: string | null;
  isYourAnswer: boolean;
}

export const MockOpponentFunction = async (
  cityName: string,
  citiesList: City[]
): Promise<MockOpponentResult> => {
  const lastLetter: string = lastLetterFunc(cityName);

  const randomTimeout = Math.floor(Math.random() * 6000) + 2000;

  const result = await new Promise<MockOpponentResult>((resolve): void => {
    setTimeout(() => {
      const answer = citiesBase.find((city): boolean => {
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
