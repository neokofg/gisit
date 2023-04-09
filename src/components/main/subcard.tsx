import { FC, ReactNode } from "react";
import { PrimaryButton } from "../ui/buttons";
// import Check from "@/assets/svg/check";
import Check from "@/assets/svg/check";
import Box from "./box";
import { useRouter } from "next/router";
import { gql, useMutation } from "@apollo/client";
const OPLATA = gql`
  mutation Mutation($input: BuyMap!) {
    buyMap(input: $input)
  }
`;
interface SubCardProps {
  children: ReactNode;
  title: string;
  price: string;
  level: number;
  active?: boolean;
}
const SubCard: FC<SubCardProps> = ({
  children,
  title,
  price,
  level,
  active = false,
}) => {
  const router = useRouter();
  const [oplata, { data, loading }] = useMutation(OPLATA);
  return (
    <div className="pt-9 flex flex-col justify-between border border-opacity-[0.12] rounded-[44px] w-[420px] h-[840px] pb-[25px] px-[33px]">
      <div className="flex flex-col">
        <h2
          className={
            (active ? "text-blue-500" : "text-slate-800") +
            " font-medium text-[48px] leading-[58px]"
          }
        >
          {title}
        </h2>
        <p className="font-medium text-lg leading-[25px] pt-5 text-slate-800 opacity-[0.66]">
          {children}
        </p>
        <div className="flex flex-col gap-3 pt-4 text-xl font-semibold text-slate-800">
          <div className="flex gap-1 items-center">
            <Check color={active ? "#3B82F6" : "black"} />
            <span>Введение в профессию</span>
          </div>
          <div className="flex gap-1 items-center">
            <Check color={active ? "#3B82F6" : "black"} />
            <span>Основы визуального дизайна</span>
          </div>
          <div className="flex gap-1 items-center">
            <Check color={active ? "#3B82F6" : "black"} />
            <span>Проектирование web-сайтов</span>
          </div>
          <div className="flex gap-1 items-center">
            <Check color={active ? "#3B82F6" : "black"} />
            <span>Визуализация web-сайтов</span>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-3">
          {level === 3 ? (
            <>
              <Box></Box>
              <Box></Box>
            </>
          ) : level === 2 ? (
            <Box></Box>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="bg-[#D1CEDE] h-[2px] w-full"></div>
        <span
          className={
            (active ? "text-blue-500" : "text-black") +
            " text-[44px] leading-[100%] font-semibold"
          }
        >
          {price}₽/мес
        </span>
        <PrimaryButton
          width="100%"
          rounded="12px"
          onClick={async () => {
            await oplata({
              variables: {
                input: {
                  scientist_id: 1,
                },
              },
              context: {
                headers: {
                  Authorization: "Bearer " + localStorage.getItem("token"),
                },
              },
            }).then((response) => {
              router.push(response.data.buyMap);
            });
          }}
        >
          Оформить подписку
        </PrimaryButton>
      </div>
    </div>
  );
};

export default SubCard;
