import { FC, ReactNode } from "react";
import { PrimaryButton } from "../ui/buttons";
// import Check from "@/assets/svg/check";
import Check from "@/assets/svg/check";
interface SubCardProps {
  children: ReactNode;
  title: string;
  price: string;
  level: number;
}
const SubCard: FC<SubCardProps> = ({ children, title, price, level }) => {
  return (
    <div className="pt-9 flex flex-col justify-between border border-opacity-[0.12] rounded-[44px] w-[420px] h-[840px] pb-[25px] px-[33px]">
      <div className="flex flex-col">
        <h2 className="font-medium text-[48px] leading-[58px] text-slate-800">
          {title}
        </h2>
        <p className="font-medium text-lg leading-[25px] pt-3 text-slate-800 opacity-[0.66]">
          {children}
        </p>
        <div className="flex flex-col gap-3 pt-4">
          <div className="flex gap-1 items-center">
            <Check />
            <span>Введение в профессию</span>
          </div>
          <div className="flex gap-1 items-center">
            <Check />
            <span>Основы визуального дизайна</span>
          </div>
          <div className="flex gap-1 items-center">
            <Check />
            <span>Проектирование web-сайтов</span>
          </div>
          <div className="flex gap-1 items-center">
            <Check />
            <span>Визуализация web-сайтов</span>
          </div>
        </div>
      </div>

      <div></div>
      <span>{price}₽/мес</span>
      <PrimaryButton onClick={() => void console.log("clicked!")}>
        Оформить подписку
      </PrimaryButton>
    </div>
  );
};

export default SubCard;
