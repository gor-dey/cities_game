import { useEffect, useRef } from "react";
import { AnswerList, useStore } from "@shared";
import { observer } from "mobx-react-lite";

export const GamePlace = observer(() => {
  const store = useStore();
  const { isYourAnswer } = store.CityStore;

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [isYourAnswer]);

  return (
    <div className="h-80 overflow-auto px-8">
      <AnswerList />
      <div ref={scrollRef} />
    </div>
  );
});
