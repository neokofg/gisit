import Logo from "@/assets/svg/logo";
import { SecondaryButton } from "./ui/buttons";
import Link from "next/link";
const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="flex justify-between items-center h-[100px] bg-white rounded-b-[44px] px-[52px]">
          <Link href="/">
            <Logo></Logo>
          </Link>
          <nav>
            <ul className="flex gap-8 text-slate-600 font-medium text-lg leading-[25px]">
              <li className="cursor-pointer">Главная</li>
              <li className="cursor-pointer">Метрика</li>
              <li className="cursor-pointer">Способ оплаты</li>
              <li className="cursor-pointer">О нас</li>
            </ul>
          </nav>
          <SecondaryButton onClick={() => console.log("Вошёл")}>
            Войти
          </SecondaryButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
