import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
const SIGNUP = gql`
  mutation Mutation($input: CreateUser!) {
    createUser(input: $input)
  }
`;

const Register = () => {
  const [signup, { data, loading }] = useMutation(SIGNUP);
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
      });
    }
  };
  return (
    <div className="w-[445px] py-12 px-8 rounded-3xl bg-white">
      <h1 className="text-slate-900 text-4xl leading-[48px] flex justify-center mb-8">
        Регистрация
      </h1>
      <form className="flex flex-col gap-6" onSubmit={Register}>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="ФИО*"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Ваш e-mail*"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Придумайте пароль*"
        />
        <input
          type="password"
          value={checkpassword}
          onChange={(e) => {
            setCheckPassword(e.target.value);
          }}
          placeholder="Повторите пароль*"
        />
        <input type="submit" value={"Зарегистрироваться"} />
      </form>
    </div>
  );
};

export default Register;
