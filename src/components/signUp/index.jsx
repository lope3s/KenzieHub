import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"

import { useState } from "react"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import axios from "axios"

const SingUp = () => {
  const [error, setError] = useState(false)
  const [registerSuccessfully, setRegisterSuccessfully] = useState(false)
  const history = useHistory()

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
      .required("Required field")
      .oneOf([yup.ref("password")], "The passwords are different"),
  })

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  })

  const registerUserRequest = async (body) => {
    // faz o POST na API dos dados do usuário
    body = {
      email: body.email,
      password: body.password,
      name: body.name,
      bio: "Type your Bio here.",
      contact: "Type your Bio here.",
      course_module: "Type your Bio here.",
    }
    try {
      const response = await axios.post("https://kenziehub.me/users", body)
      setRegisterSuccessfully(true) // mostrar mensagem de registrado com sucesso
      setTimeout(() => {
        // redirecionar para a página de Login
        history.push("/signIn")
      }, 3000)
      console.log(response)
    } catch (erro) {
      setError(true) // mostrar mensagem de erro
      console.log(erro)
    }
  }

  const handleForm = (value) => {
    // onClick do formulário
    registerUserRequest(value)
  }

  const divMessageSuccess = (
    <div>
      <h3>You Have Been Registered Successfully</h3>
    </div>
  )
  const divSingUpForm = (
    <div>
      <form onSubmit={handleSubmit(handleForm)}>
        {error && <div>E-mail already registered, please try again!</div>}
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
    </div>
  )

  return <div>{registerSuccessfully ? divMessageSuccess : divSingUpForm}</div>
}

export default SingUp
