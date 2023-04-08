import { BigLabel } from "../ui/label";
import SubCard from "./subcard";
const Sub = () => {
  return (
    <div>
      <BigLabel></BigLabel>
      <h1>цены на подписку</h1>
      <div>
        <SubCard title="Стандарт" price="999" level={1}>
          После прохождения сможете самостоятельно выполнять заказы на фрилансе
          или устроиться в агентство
        </SubCard>
        <SubCard title="Про" price="3 490" level={2}>
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
