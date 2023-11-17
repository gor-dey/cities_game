export const lastLetterFunc = (cityName: string): string => {
  let lastLetter: string = cityName[cityName.length - 1];
  if (lastLetter === "ь" || lastLetter === "ъ" || lastLetter === "ы") {
    lastLetter = cityName[cityName.length - 2];
  }
  return lastLetter.toLowerCase();
};
