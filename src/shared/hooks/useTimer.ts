import { useState, useEffect } from "react";

interface UseTimerProps {
  initialSeconds: number;
  onTimerEnd?: () => void;
}

export const useTimer = ({
  initialSeconds,
  onTimerEnd,
}: UseTimerProps): number => {
  const [startTime, setStartTime] = useState<number | null>(null);

  const calculateRemainingTime = (): number => {
    if (startTime === null) return initialSeconds * 1000;

    const elapsedTime = Date.now() - startTime;
    const remainingTime = initialSeconds * 1000 - elapsedTime;

    return Math.max(remainingTime, 0);
  };

  const [milliseconds, setMilliseconds] = useState(calculateRemainingTime());

  useEffect(() => {
    if (startTime === null) {
      setStartTime(Date.now());
    }

    const timerInterval = setInterval(() => {
      setMilliseconds(calculateRemainingTime());
    }, 1000);

    if (milliseconds === 0) {
      clearInterval(timerInterval);
      onTimerEnd && onTimerEnd();
    }

    return () => clearInterval(timerInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [milliseconds, onTimerEnd, startTime]);

  return Math.ceil(milliseconds / 1000);
};
