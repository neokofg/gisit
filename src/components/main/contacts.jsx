import { BigLabel } from "../ui/label";
import Image from "next/image";
import Man from "@/assets/man.png";
const Contacts = () => {
  return (
    <div className="flex flex-col items-start px-9 pt-[57px] bg-white rounded-[40px] mt-5 h-[726px]">
      <div className="pl-5 flex flex-col items-start">
        <BigLabel type="phone">консультации</BigLabel>
        <h1 className="text-slate-800 text-[96px] leading-[116.45px] font-medium w-[920px]">
          обращайтесь за <span className="text-blue-500">лучшими</span> мнениями
        </h1>
      </div>

      <div className="mt-[43px] flex gap-7">
        <Image src={Man} width={198} height={198} alt="!"></Image>
        <Image src={Man} width={198} height={198} alt="!"></Image>
        <Image src={Man} width={198} height={198} alt="!"></Image>
        <Image src={Man} width={198} height={198} alt="!"></Image>
        <Image src={Man} width={198} height={198} alt="!"></Image>
        <Image src={Man} width={198} height={198} alt="!"></Image>
      </div>
    </div>
  );
};

export default Contacts;
