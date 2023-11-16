import { observer } from "mobx-react-lite";
import { useStore } from "@shared";

export const AnswerList = observer(() => {
  const store = useStore();
  const { citiesList } = store.CityStore;

  return (
    <div className="flex flex-col gap-2">
      {citiesList.map((city, index) => (
        <span
          key={index}
          className={`p-3 ${
            city.isYourAnswer
              ? "ml-auto bg-violet-500 text-white rounded-br-none"
              : "mr-auto bg-violet-50 text-gray-700 rounded-bl-none"
          } rounded-3xl`}
        >
          {city.name}
        </span>
      ))}
    </div>
  );
});
