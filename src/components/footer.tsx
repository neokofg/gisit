import { FC } from "react";
import Logo from "@/assets/svg/logo";
import MSG from "@/assets/svg/messangers";
import Link from "next/link";
const Footer: FC = () => {
  return (
    <footer className="mb-[45px] mt-4">
      <div className="container bg-white px-[52px] py-[32px] rounded-[40px] flex gap-10 flex-col">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Logo></Logo>
          </Link>
          <ul className="flex text-lg font-medium leading-[25px] text-[#747474] gap-8">
            <li>
              <Link href="/">Главная</Link>
            </li>
            <li>
              <Link href="/map">Карта</Link>
            </li>
            <li>Способ оплаты</li>
            <li>О нас</li>
          </ul>
          <div className="cursor-pointer">
            <MSG></MSG>
          </div>
        </div>
        <div className="flex justify-between items-center text-slate-400">
          <span>© 2010 - 2023 Веб-сервис «ЯПрогноз»</span>
          <span>Политика конфиденциалности</span>
          <span>Дизайн и разработка “ЛераФанс”</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
