import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import axios from "axios";

const SingUp = () => {
  const [error, setError] = useState(false);

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Campo Obrigatório")
      .min(6)
      .matches(
        /^(.[a-zÀ-ÿ].+\s).+$/i,
        "nome deve ter sobrenome, deve ser sem número ou caracter especial"
      ),

    password: yup.string().min(6).required("Campo Obrigatório"),

    email: yup.string().email("Email invalído").required("Campo Obrigatório"),

    confirmPassword: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password")], "Senhas Diferentes"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const registerUserRequest = async (body) => {
    //
    body = {
      email: body.email,
      password: body.password,
      name: body.name,
      bio: "Type your Bio here.",
      contact: "Type your Bio here.",
      course_module: "Type your Bio here.",
    };
    try {
      const response = await axios.post("https://kenziehub.me/users", body);
      console.log(response);
      console.log(body);
    } catch (erro) {
      setError(true);
      console.log(erro);
    }
  };

  const handleForm = (value) => {
    registerUserRequest(value);
  };

  return (
    <>
      {error && (
        <div>Informações de Registro inválida, por favor tente novamente !</div>
      )}
      <form onSubmit={handleSubmit(handleForm)}>
        <input type="text" name="name" placeholder="Name" ref={register} />
        <p>{errors.name?.message}</p>
        <input type="text" name="email" placeholder="E-mail" ref={register} />
        <p>{errors.email?.message}</p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          ref={register}
        />
        <p>{errors.password?.message}</p>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          ref={register}
        />
        <p>{errors.confirmPassword?.message}</p>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default SingUp;
