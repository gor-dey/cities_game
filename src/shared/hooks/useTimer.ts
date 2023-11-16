import { useState, useEffect } from "react";

interface UseTimerProps {
  initialSeconds: number;
  onTimerEnd?: () => void;
}

export const useTimer = ({ initialSeconds, onTimerEnd }: UseTimerProps) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);

    if (seconds === 0) {
      clearInterval(timerInterval);
      onTimerEnd && onTimerEnd();
    }

    return () => clearInterval(timerInterval);
  }, [seconds, onTimerEnd]);

  return seconds;
};
