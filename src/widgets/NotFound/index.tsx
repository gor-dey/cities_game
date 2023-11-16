import { Button } from "@shared";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="py-10 px-10 flex flex-col items-center gap-8">
      <span>Страница не найдена!</span>
      <Link to="/">
        <Button text="На главную" />
      </Link>
    </div>
  );
};
