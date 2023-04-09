import { useState } from "react";
import { useRouter } from "next/router";
import Gilroy from "next/font/local";
import { gql, useMutation } from "@apollo/client";
import { PrimaryButton } from "@/components/ui/buttons";
import { ModalInput } from "@/components/ui/inputs";
import { setAuth, setUser } from "@/store/auth.slice";
const gilroyBold = Gilroy({
  src: "../../fonts/Gilroy-Bold.woff",
});
const SIGNUP = gql`
  mutation Mutation($input: CreateUser!) {
    createUser(input: $input)
  }
`;
import { useAppSelector, useAppDispatch } from "@/hooks";

const Register = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [signup, { data, loading }] = useMutation(SIGNUP);
  const [me, { data2, loading2 }] = useMutation(ME);
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checkpassword, setCheckPassword] = useState();
  const Register = async (e) => {
    e.preventDefault();
    if (password === checkpassword) {
      await signup({
        variables: {
          input: {
            email: email,
            name: username,
            password: password,
          },
        },
      }).then((response) => {
        localStorage.setItem("token", response.data.createUser);
        dispatch(setAuth(true));
        router.reload();
      });
      await me({
        context: {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        },
      }).then((response) => {
        dispatch(setUser(response.data.me));
        localStorage.setItem("user", JSON.stringify(response.data.me));
      });
    }
  };
  return (
    <div className="w-[445px] py-12 px-8 rounded-3xl bg-white">
      <h1
        style={gilroyBold.style}
        className="text-slate-900 text-4xl leading-[48px] flex justify-center mb-8"
      >
        Регистрация
      </h1>
      <form className="flex flex-col gap-6" onSubmit={Register}>
        <ModalInput
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="ФИО*"
        ></ModalInput>
        <ModalInput
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Ваш e-mail*"
        ></ModalInput>
        <ModalInput
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Придумайте пароль*"
        ></ModalInput>
        <ModalInput
          type="password"
          value={checkpassword}
          onChange={(e) => {
            setCheckPassword(e.target.value);
          }}
          placeholder="Повторите пароль*"
        ></ModalInput>
        <PrimaryButton height="64px" width="100%">
          Зарегистрироваться
        </PrimaryButton>
      </form>
    </div>
  );
};

export default Register;
