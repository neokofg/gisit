import { FC } from "react";
import { Pin, ArrowDown, Calendar } from "@/assets/svg/search";

interface Input {
  value: string | number | undefined;
  onChange: () => void;
  type?: "text" | "number" | "date" | "password";
  placeholder?: string;
  height?: string;
  width?: string;
}

export const SelectInput: FC<Input> = ({
  value,
  onChange,
  type = "text",
  placeholder,
  height,
  width,
}) => {
  const style = {
    height: height,
    width: width,
  };
  return (
    <div
      style={style}
      className="pl-6 flex items-center justify-between pr-[24px] py-[22px] border font-medium text-[15px] leading-[20px] text-slate-400 rounded-xl"
    >
      <input
        className="outline-none"
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
      <ArrowDown></ArrowDown>
    </div>
  );
};

export const SearchInput: FC<Input> = ({
  value,
  onChange,
  type = "text",
  placeholder,
  height,
  width,
}) => {
  const style = {
    height: height,
    width: width,
  };
  return (
    <div
      style={style}
      className="pl-6 flex gap-2 items-center py-[22px] border font-medium text-[15px] leading-[20px] text-slate-400 rounded-xl"
    >
      <Pin></Pin>
      <input
        className="outline-none"
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

export const DateInput: FC<Input> = ({
  value,
  onChange,
  type = "date",
  placeholder,
  height,
  width,
}) => {
  const style = {
    height: height,
    width: width,
  };
  return (
    <div
      style={style}
      className="pl-6 flex gap-2 items-center py-[22px] border font-medium text-[15px] leading-[20px] text-slate-400 rounded-xl"
    >
      <Calendar></Calendar>
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
