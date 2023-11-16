import { Form, GamePlace, Header } from "@entities";
import { useTimer } from "@shared";

export const Game = () => {
  const timer = useTimer({ initialSeconds: 120, onTimerEnd: handleTimerEnd });

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  function handleTimerEnd() {
    console.log("Timer has reached 0!");
  }

  return (
    <div className="min-w-max">
      <Header text="Сейчас ваша очередь" timer={formatTime(timer)} />
      <GamePlace />
      <Form />
    </div>
  );
};
