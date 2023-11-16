import { Form, GamePlace, Header } from "@entities";
import { useStore, useTimer } from "@shared";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

export const Game = observer(() => {
  const store = useStore();
  const { setFinalResults, isYourAnswer } = store.CityStore;

  const timer = useTimer({ initialSeconds: 120, onTimerEnd: handleTimerEnd });
  const navigate = useNavigate();

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  function handleTimerEnd() {
    setFinalResults();
    navigate("/finish");
  }

  const headerText = isYourAnswer
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
