export const lastLetterFunc = (cityName: string) => {
  let lastLetter = cityName[cityName.length - 1];
  if (lastLetter === "ь" || lastLetter === "ъ") {
    lastLetter = cityName[cityName.length - 2];
  }
  return lastLetter.toLowerCase();
};
