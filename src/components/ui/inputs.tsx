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
      <select value={value} onChange={onChange}>
        <option value="tas">tas</option>
        <option value="pr">pr</option>
        <option value="bio">bio</option>
      </select>
      {/* <input
        className="outline-none w-full"
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      /> */}
      <ArrowDown></ArrowDown>
    </div>
  );
};

interface ModalInputProps {
  placeholder: string;
  onChange: () => void;
  value: string | number | undefined;
  type: string;
}
export const ModalInput: FC<ModalInputProps> = ({
  value,
  placeholder,
  onChange,
  type = "text",
}) => {
  return (
    <input
      autoComplete="off"
      className="w-full border-[2px] border-slate-200 rounded-2xl bg-white px-6 py-[22px] placeholder:text-slate-400 outline-none leading-5 font-medium text-[15px]"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
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
        className="outline-none w-full"
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
