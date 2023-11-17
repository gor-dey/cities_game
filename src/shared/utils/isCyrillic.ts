export const isCyrillic = (str: string): boolean => {
  const cyrillicRegex = /^[\u0400-\u04FF\s-]+$/;

  return cyrillicRegex.test(str);
};
