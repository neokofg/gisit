import BoxImage from "@/assets/box.png";
import Image from "next/image";
import { PrimaryButton } from "../ui/buttons";
const Box = () => {
  return (
    <div className="flex items-center justify-between bg-[#F1F1F1] rounded-[17px] h-[50px] px-[10px]">
      <Image src={BoxImage} height={20} width={20} alt="!"></Image>
      <span className="font-semibold text-base text-slate-800">
        Подготовка портфолио
      </span>
      <PrimaryButton
        onClick={() => void console.log("hey")}
        height="30px"
        width="85px"
        textSize="12px"
      >
        в подарок
      </PrimaryButton>
    </div>
  );
};

export default Box;
