import { HeaderProps } from "@shared";
import "./Header.css";

export const Header = ({ text, timer = null }: HeaderProps) => {
  return (
    <div className="flex justify-between align-middle p-8 header-container">
      <div className={`${timer === null ? "m-auto" : ""} text-base`}>
        {text}
      </div>
      <div className="text-xl header-timer">
        {timer}
        <div className="border-animation" />
      </div>
    </div>
  );
};
