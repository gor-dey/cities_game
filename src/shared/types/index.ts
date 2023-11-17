export type HeaderProps = {
  text: string;
  timer?: string | null;
};

export type ButtonProps = {
  text?: string;
  img?: string;
};

export type City = {
  name: string | null;
  isYourAnswer: boolean;
};

export type FinalResultsType = {
  lastCity: string | null;
  isYouWin: boolean;
  totalCount: number;
};

export type HeaderTextType = "Сейчас ваша очередь" | "Сейчас очередь соперника";

export type ResultSpanType =
  | "Очень неплохой результат!"
  | "В следующий раз будет лучше!";
