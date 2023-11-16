import { HeaderProps } from "@shared";
import "./Header.css";

export const Header = ({ text, timer = null }: HeaderProps) => {
  return (
    <div
      className={`flex justify-between align-middle px-8 py-6 ${
        timer ? "header-container" : ""
      } `}
    >
      <div className={`${timer === null && "m-auto"} text-base`}>{text}</div>
      <div className={`text-xl ${timer ? "header-timer" : ""}`}>
        {timer && (
          <>
            {timer}
            <div className="border-animation" />
          </>
        )}
      </div>
    </div>
  );
};
