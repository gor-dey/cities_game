export const isCyrillic = (str: string) => {
  const cyrillicRegex = /^[\u0400-\u04FF]+$/;

  return cyrillicRegex.test(str);
};
