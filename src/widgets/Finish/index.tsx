import { Results } from "@entities";
import { Button, useStore } from "@shared";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

export const Finish = observer(() => {
  const store = useStore();
  const { reset } = store.CityStore;

  return (
    <div className="p-10 flex flex-col items-center">
      <Results />
      <Link to="/game" onClick={reset}>
        <Button text="Начать новую игру" />
      </Link>
    </div>
  );
});
