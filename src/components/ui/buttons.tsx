import { FC, ReactNode } from "react";

export interface ButtonProps {
  onClick: () => void;
  height?: string;
  width?: string;
  disabled?: boolean;
  rounded?: string;
  children: ReactNode;
}
export interface SecondaryButtonProps extends ButtonProps {
  color?: string;
}
export const SecondaryButton: FC<SecondaryButtonProps> = ({
  onClick,
  height = "48px",
  width = "340px",
  disabled = false,
  rounded = "90px",
  color = "#1C63EC",
  children,
}) => {
  const style = {
    height: height,
    width: width,
    borderRadius: rounded,
    color: color,
  };
  return (
    <button
      className="bg-[#3B82F6] bg-opacity-25 flex justify-center items-center text-[18px] font-medium text-center 
      leading-[20px] active:bg-[#E4E4E4] disabled:bg-[#C9CACB] disabled:text-[#F0F1F2]"
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
