import { Form, GamePlace, Header } from "@entities";
import { HeaderTextType, useStore, useTimer } from "@shared";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

export const Game = observer(() => {
  const store = useStore();
  const { setFinalResults, isYourAnswer } = store.CityStore;

  const timer: number = useTimer({
    initialSeconds: 120,
    onTimerEnd: handleTimerEnd,
  });
  const navigate = useNavigate();

  const formatTime = (seconds: number): string => {
    const minutes: number = Math.floor(seconds / 60);
    const remainingSeconds: number = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  function handleTimerEnd(): void {
    setFinalResults();
    navigate("/finish");
  }

  const headerText: HeaderTextType = isYourAnswer
    ? "Сейчас ваша очередь"
    : "Сейчас очередь соперника";

  return (
    <div className="min-w-max">
      <Header text={headerText} timer={formatTime(timer)} />
      <GamePlace />
      <Form />
    </div>
  );
});
