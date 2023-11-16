import { Button } from "@shared";
import { Link } from "react-router-dom";

export const RulesOfGame = () => {
  return (
    <div className="p-8 border-t-2">
      <article className="prose">
        <p>Цель: Назвать как можно больше реальных городов.</p>

        <ul>
          <li>Запрещается повторение городов.</li>
          <li>
            Названий городов на твердый “ъ” и мягкий “ъ” знак, а также на букву
            "ы" нет. Из-за этого бы пропускаем эту букву и игрок должен назвать
            город на букву стоящую перед ы, ъ или ь знаком.
          </li>
          <li>
            Каждому игроку дается 2 минуты на размышления, если спустя это время
            игрок не вводит слово он считается проигравшим
          </li>
        </ul>
      </article>

      <div className="flex justify-center mt-4">
        <Link to="/game">
          <Button text="Начать игру" />
        </Link>
      </div>
    </div>
  );
};
