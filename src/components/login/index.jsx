import { useForm } from "react-hook-form"
import { useState } from "react"
import { TextField, Button } from "@material-ui/core"
import { validation } from "../../store/modules/validationToken/action"
import { useDispatch } from "react-redux"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import axios from "axios"

import { useHistory } from "react-router-dom"


// import {useHistory} from "react-router-dom"

const Login = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [error, setError] = useState(false)

  const schema = yup.object().shape({
    userName: yup.string().required("Cannot be blank"),
    password: yup.string().required("Cannot be blank"),
  })

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })
  const sendData = async (body) => {
    body = { email: body.userName, password: body.password }

    try {
      const res = await axios.post("https://kenziehub.me/sessions", body)
      const data = await res.data
      console.log(res)
      setError(false)
      window.localStorage.setItem("infoLogged", JSON.stringify(data.user))
      window.localStorage.setItem("token", data.token)
      // setar componente no state global  ok
      history.push("/profile")

      dispatch(validation(true))
    } catch (err) {
      setError(true)
      console.log(err)
    }
  }

  return (
    <div>
      <fieldset>
        <legend>Login</legend>
        {error && (
          <div>Não foi possivel realizar seu Login, tente novamente</div>
        )}
        <form onSubmit={handleSubmit(sendData)}>
          <TextField
            margin="normal"
            variant="outlined"
            name="userName"
            error={!!errors.userName}
            helperText={errors.userName?.message}
            inputRef={register}
          />
          <TextField
            margin="normal"
            variant="outlined"
            name="password"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            inputRef={register}
          />
          <Button type="submit">entrar</Button>
        </form>
      </fieldset>
    </div>
  )
}

export default Login
