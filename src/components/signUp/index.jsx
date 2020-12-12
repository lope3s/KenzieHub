import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import logo from "./page.svg";

const SingUp = () => {
  const [error, setError] = useState(false);
  const [registerSuccessfully, setRegisterSuccessfully] = useState(false);
  const history = useHistory();

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
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          marginLeft: "100px",
          textAlign: "center",
          width: "500px",
          alignItems: "center",
          height: "500px",
          background: "rgba(238, 238, 238, 0.04)",
          borderRadius: "15px",
        }}
      >
        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            color: "white",
            fontSize: "25px",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          Hey! Welcome
        </div>
        <form
          onSubmit={handleSubmit(handleForm)}
          style={{
            marginTop: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          {error && (
            <div>E-mail já cadastrado, por favor tente novamente !</div>
          )}
          <div
            style={{
              marginLeft: "-220px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            UserName
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            ref={register}
            style={{
              height: "38px",
              width: "300px",
              borderRadius: "5px",
              border: "0",
              backgroundColor: "white",
            }}
          />
          <p>{errors.name?.message}</p>
          <div
            style={{
              marginLeft: "-245px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            E-mail
          </div>
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            ref={register}
            style={{
              height: "38px",
              width: "300px",
              borderRadius: "5px",
              border: "0",
              backgroundColor: "white",
            }}
          />
          <p>{errors.email?.message}</p>
          <div
            style={{
              marginLeft: "-225px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            Password
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            ref={register}
            style={{
              height: "38px",
              width: "300px",
              borderRadius: "5px",
              border: "0",
              backgroundColor: "white",
            }}
          />
          <p>{errors.password?.message}</p>
          <div
            style={{
              marginLeft: "-150px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            Confirme Password
          </div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            ref={register}
            style={{
              height: "38px",
              width: "300px",
              borderRadius: "5px",
              border: "0",
              backgroundColor: "white",
            }}
          />
          <p>{errors.confirmPassword?.message}</p>
          <button
            type="submit"
            style={{
              marginTop: "10px",
              background: "#48A3DA",
              border: "0",
              boxSizing: "border-box",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: "12px",
              width: "150px",
              height: "50px",
              color: "white",
              fontSize: "20px",
            }}
          >
            Register
          </button>
        </form>
      </div>
      <img
        src={logo}
        alt="Image principal na pagina de cadstro"
        style={{ marginLeft: "50px" }}
      ></img>
    </div>
  );

  return <div>{registerSuccessfully ? divMessageSuccess : divSingUpForm}</div>;
};

export default SingUp;
