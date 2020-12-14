import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import logo from "./page.svg";

import { Container } from "./style";
const SingUp = () => {
  const [error, setError] = useState(false);
  const [registerSuccessfully, setRegisterSuccessfully] = useState(false);
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Required field")
      .min(6)
      .matches(
        /^(.[a-zÀ-ÿ]).+$/i,
        "name must be without number or special character"
      ),

    password: yup.string().min(6).required("Required field"),

    email: yup.string().email("Invalid email").required("Required field"),

    confirmPassword: yup
      .string()
      .required("Campo Obrigatório")
      .oneOf([yup.ref("password")], "Senhas Diferentes"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const registerUserRequest = async (body) => {
    // faz o POST na API dos dados do usuário
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
      setRegisterSuccessfully(true); // mostrar mensagem de registrado com sucesso
      setTimeout(() => {
        // redirecionar para a página de Login
        history.push("/signIn");
      }, 3000);
      console.log(response);
    } catch (erro) {
      setError(true); // mostrar mensagem de erro
      console.log(erro);
    }
  };

  const handleForm = (value) => {
    // onClick do formulário
    registerUserRequest(value);
  };

  const divMessageSuccess = (
    <div>
      <h3>You Have Been Registered Successfully</h3>
    </div>
  );
  const divSingUpForm = (
    <Container>
      <div className="ContainerInputs">
        <div>Hey! Welcome</div>
        <form onSubmit={handleSubmit(handleForm)} className="Form">
          {error && (
            <div>E-mail já cadastrado, por favor tente novamente !</div>
          )}
          <div className="PlaceholderUser">UserName</div>
          <input
            className="InputName"
            type="text"
            name="name"
            placeholder="Name"
            ref={register}
          />
          <p>{errors.name?.message}</p>
          <div className="PlaceholderEmail">E-mail</div>
          <input
            className="InputEmail"
            type="text"
            name="email"
            placeholder="E-mail"
            ref={register}
          />
          <p>{errors.email?.message}</p>
          <div className="PlaceholderPassword">Password</div>
          <input
            className="InputPassword"
            type="password"
            name="password"
            placeholder="Password"
            ref={register}
          />
          <p>{errors.password?.message}</p>
          <div className="PlaceholderConfirmPassword">Confirme Password</div>
          <input
            className="InputConfirmaPassword"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            ref={register}
          />
          <p>{errors.confirmPassword?.message}</p>
          <button className="Submit" type="submit">
            Register
          </button>
        </form>
      </div>
      <img
        src={logo}
        alt="Image principal na pagina de cadastro"
        style={{ marginLeft: "50px" }}
      ></img>
    </Container>
  );

  return <div>{registerSuccessfully ? divMessageSuccess : divSingUpForm}</div>;
};

export default SingUp;
