import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"

import { useState } from "react"
import { useDispatch } from "react-redux"

import { TextField, Button } from "@material-ui/core"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { validation } from "../../store/modules/validationToken/action"

import axios from "axios"

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [error, setError] = useState(false)

  const schema = yup.object().shape({
    email: yup.string().email("Invalid E-mail").required("Cannot be blank"),
    password: yup.string().required("Cannot be blank"),
  })
  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })

  const sendData = async (body) => {
    body = { email: body.email, password: body.password }

    try {
      const res = await axios.post("https://kenziehub.me/sessions", body)
      const data = await res.data

      console.log(res)
      setError(false) //não exibir mensagem de erro

      window.localStorage.setItem("infoLogged", JSON.stringify(data.user))
      window.localStorage.setItem("token", data.token)

      history.push("/profile")
      dispatch(validation(true))
    } catch (err) {
      setError(true) //exibir mensagem de erro
      console.log(err)
    }
  }

  return (
    <section>
      <h3>Hey!</h3>
      <h3>Welcome Back</h3>
      {error && <span>It was not possible to login, please try again</span>}
      <form onSubmit={handleSubmit(sendData)}>
        <TextField
          margin="normal"
          variant="outlined"
          name="email"
          placeholder="e-mail"
          error={!!errors.email}
          helperText={errors.email?.message}
          inputRef={register}
        />
        <TextField
          margin="normal"
          variant="outlined"
          name="password"
          type="password"
          placeholder="password"
          error={!!errors.password}
          helperText={errors.password?.message}
          inputRef={register}
        />
        <Button type="submit">sign in</Button>
      </form>
    </section>
  )
}

export default Login
