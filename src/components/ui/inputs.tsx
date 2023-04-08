import { FC } from "react";

interface Input {
  value: string | number | undefined;
  onChange: () => void;
  type?: "text" | "number" | "date" | "password";
  placeholder?: string;
}

export const SelectInput: FC<Input> = ({
  value,
  onChange,
  type = "text",
  placeholder,
}) => {
  return (
    <input
      className="pl-6 py-[22px] border font-medium text-[15px] leading-[20px] text-slate-400 rounded-xl"
      type={type}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export const SearchInput: FC<Input> = ({
  value,
  onChange,
  type = "text",
  placeholder,
}) => {
  return (
    <div>
      <input
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
}) => {
  return (
    <div>
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
