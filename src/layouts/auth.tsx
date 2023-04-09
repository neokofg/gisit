import { useAppDispatch } from "@/hooks";
import { FC, ReactNode, useEffect } from "react";
import { setAuth } from "@/store/auth.slice";
const AuthLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(setAuth(true));
    }
  }, []);
  return <>{children}</>;
};

export default AuthLayout;
