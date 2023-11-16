import { ButtonProps } from "@shared";

export const Button = ({ text, img }: ButtonProps) => {
  return (
    <button className="bg-violet-600 hover:bg-violet-700 text-white py-2 px-4 rounded">
      {text && text} {img && <img src={img} alt="icon" />}
    </button>
  );
};
