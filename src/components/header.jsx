import Logo from "@/assets/svg/logo";
import { SecondaryButton, PrimaryButton } from "./ui/buttons";
import { setActive } from "@/store/modal.slice";
import { setAuth } from "@/store/auth.slice";
import { useAppDispatch, useAppSelector } from "@/hooks";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
const Header = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.logged);
  useEffect(() => {
    console.log(user);
  }, []);
  return (
    <header>
      <div className="container">
        <div className="flex justify-between items-center h-[100px] bg-white rounded-b-[44px] px-[52px]">
          <Link href="/">
            <Logo></Logo>
          </Link>
          <nav>
            <ul className="flex gap-8 text-slate-600 font-medium text-lg leading-[25px]">
              <li className="cursor-pointer">
                <Link href="/">Главная</Link>
              </li>
              <li className="cursor-pointer">
                <Link href="/map">Карта</Link>
              </li>
              <li className="cursor-pointer">Способ оплаты</li>
              <li className="cursor-pointer">О нас</li>
            </ul>
          </nav>
          <div className="flex gap-6">
            {!user ? (
              <SecondaryButton
                width="140px"
                height="60px"
                onClick={() => dispatch(setActive(true))}
              >
                Войти
              </SecondaryButton>
            ) : (
              <SecondaryButton
                width="140px"
                height="60px"
                onClick={() => {
                  localStorage.removeItem("token");
                  dispatch(setAuth(false));
                  router.reload();
                }}
              >
                Выйти
              </SecondaryButton>
            )}

            <PrimaryButton width="168px" height="60px">
              Телеграм - бот
            </PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
