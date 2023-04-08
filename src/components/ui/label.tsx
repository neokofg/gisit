import { FC, ReactNode } from "react";
import Sun from "@/assets/sun.png";
import Bill from "@/assets/bill.png";
import Phone from "@/assets/phone.png";
interface BigLabelProps {
  children: ReactNode;
  type: "sun" | "bill" | "phone";
}
import Image from "next/image";
export const BigLabel: FC<BigLabelProps> = ({ children, type }) => {
  return (
    <div className="flex items-center gap-3 px-[19px] h-[50px] rounded-[52px] border border-[#3B82F6]">
      <Image
        src={type === "sun" ? Sun : type === "bill" ? Bill : Phone}
        height={24}
        width={32}
        alt="!"
      ></Image>
      <span className="font-medium text-[24px] leading-[33px] text-[#3B82F6]">
        {children}
      </span>
    </div>
  );
};

// export default BigLabel;
