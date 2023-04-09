import { BigLabel } from "../ui/label";
import SubCard from "./subcard";
const Sub = () => {
  return (
    <div className="flex flex-col items-start px-[52px] pt-10 bg-white rounded-[40px] mt-5 pb-[80px]">
      <BigLabel>подписка</BigLabel>
      <h1 className="font-medium text-[96px] mt-6 leading-[116px]">
        <span className="text-blue-500">цены</span> на подписку
      </h1>
      <div className="mt-7 flex gap-4">
        <SubCard title="Стандарт" price="990" level={1}>
          После прохождения сможете самостоятельно выполнять заказы на фрилансе
          или устроиться в агентство
        </SubCard>
        <SubCard active={true} title="Про" price="2 290" level={2}>
          После прохождения сможете самостоятельно выполнять заказы на фрилансе
          или устроиться в агентство
        </SubCard>
        <SubCard title="Все включено" price="3 490" level={3}>
          После прохождения сможете самостоятельно выполнять заказы на фрилансе
          или устроиться в агентство
        </SubCard>
      </div>
    </div>
  );
};

export default Sub;
