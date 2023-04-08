import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  number: number;
  title: string;
}
const Card: FC<CardProps> = ({ children, number, title }) => {
  return (
    <div className="bg-white h-[249px] pl-5 pt-4 border rounded-[20px] border-opacity-10 flex flex-col items-start">
      <span className="text-blue-500 font-bold text-xl leading-6">
        0{number}
      </span>
      <h3 className="font-medium mt-7 text-2xl leading-[29px] text-slate-800">
        {title}
      </h3>
      <p className="font-medium mt-2 text-slate-800 text-base leading-6">
        {children}
      </p>
    </div>
  );
};
export default Card;
