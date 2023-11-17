import { observer } from "mobx-react-lite";
import { ResultSpanType, useStore } from "@shared";

export const Results = observer(() => {
  const store = useStore();
  const { finalResults } = store.CityStore;
  const { totalCount, lastCity, isYouWin } = finalResults;

  if (totalCount === 0)
    return (
      <div className="py-28">
        Похоже вы не вспомнили ни одного города {":-("}
      </div>
    );

  const isGoodResult: boolean = totalCount > 10;

  const resultSpan: ResultSpanType = isGoodResult
    ? "Очень неплохой результат!"
    : "В следующий раз будет лучше!";

  return (
    <div className="prose px-4 flex flex-col items-center gap-8 pb-8">
      <div className="flex flex-col items-center">
        {isYouWin ? (
          <>
            <span>Поздравляем тебя с победой!</span>
            <span>Твой противник не вспомнил нужный город!</span>
          </>
        ) : (
          <>
            <span>К сожалению твое время вышло!</span>
            <span>Твой противник победил!</span>
          </>
        )}
      </div>

      <span
        className={`text-3xl ${isYouWin ? "text-green-600" : "text-red-600"}`}
      >
        00:00
      </span>

      <div className="flex flex-col items-center">
        <span>Всего было перечислено городов: {totalCount}</span>
        <span>{resultSpan}</span>
      </div>

      <div className="flex flex-col items-center">
        <span>Последний город, названный победителем</span>
        <span className="text-2xl">{lastCity}</span>
      </div>
    </div>
  );
});
