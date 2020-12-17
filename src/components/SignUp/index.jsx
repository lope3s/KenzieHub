import { useForm } from "react-hook-form"
import { useHistory } from "react-router-dom"

import { useState } from "react"

import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import axios from "axios"

import logo from "./page.svg"
import { TextField, Button } from "@material-ui/core"
import React from "react"
import Snackbar from "@material-ui/core/Snackbar"
import MuiAlert from "@material-ui/lab/Alert"
import { makeStyles } from "@material-ui/core/styles"
import { Container } from "./style"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

const SingUp = () => {
  const [error, setError] = useState(false)
  const [registerSuccessfully, setRegisterSuccessfully] = useState(false)
  const history = useHistory()
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Required field")
      .min(6, "Name must be at least 6 characters")
      .matches(
        /^(.[a-zÀ-ÿ]).+$/i,
        "Name must be without number or special character"
      ),

    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Required field"),

    email: yup.string().email("Invalid email").required("Required field"),

    confirmPassword: yup
      .string()
      .required("Required field")
      .oneOf([yup.ref("password")], "Different Passwords"),
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
      contact: "Type your Contact here.",
      course_module: "Type your Course Module here.",
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
    registerUserRequest(value)
    setOpen(true)
  }

  const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return
    }
    setOpen(false)
  }

  const divSingUpForm = (
    <Container>
      <div className="ContainerInputs">
        <div className="h3-content">
          <h3>Hey!</h3>
          <h3>Welcome</h3>
        </div>
        <form onSubmit={handleSubmit(handleForm)} className="Form">
          {error && <div>Invalid Registration Information</div>}
          <div
            style={{
              marginLeft: "-220px",
              // marginTop: "10px",
              // marginBottom: "10px",
            }}
          ></div>
          <TextField
            id="inputs"
            variant="outlined"
            color="primary"
            name="name"
            type="text"
            placeholder="UserName"
            inputRef={register}
            style={{
              width: "300px",
              borderRadius: "5px",
              border: "0",
            }}
            helperText={errors.name?.message}
            error={!!errors.name}
          />
          <div
            style={{
              marginLeft: "-245px",
              // marginTop: "10px",
              // marginBottom: "10px",
            }}
          ></div>
          <TextField
            variant="outlined"
            color="primary"
            type="text"
            name="email"
            placeholder="E-mail"
            inputRef={register}
            style={{
              width: "300px",
              borderRadius: "5px",
              border: "0",
            }}
            helperText={errors.email?.message}
            error={!!errors.email}
          />
          <div
            style={{
              marginLeft: "-225px",
              // marginTop: "10px",
              // marginBottom: "10px",
            }}
          ></div>
          <TextField
            variant="outlined"
            color="primary"
            type="password"
            name="password"
            placeholder="Password"
            inputRef={register}
            style={{
              width: "300px",
              borderRadius: "5px",
              border: "0",
            }}
            helperText={errors.password?.message}
            error={!!errors.password}
          />
          <div
            style={{
              marginLeft: "-150px",
              // marginTop: "10px",
              // marginBottom: "10px",
            }}
          ></div>
          <TextField
            variant="outlined"
            color="primary"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            inputRef={register}
            style={{
              width: "300px",
              borderRadius: "5px",
              border: "0",
            }}
            helperText={errors.confirmPassword?.message}
            error={!!errors.confirmPassword}
          />

          <Button
            type="submit"
            style={{
              marginTop: "36px",
              background: "#48A3DA",
              border: "0",
              boxSizing: "border-box",
              borderRadius: "10px",
              width: "150px",
              height: "45px",
              fontSize: "20px",
              fontFamily: "Righteous, cursive",
              background: "#48a3da",
              letterSpacing: "2px",
            }}
          >
            Register
          </Button>
        </form>
      </div>
      <img src={logo} alt="SigUp" style={{ marginLeft: "110px" }}></img>
    </Container>
  )

  return (
    <div>
      {registerSuccessfully ? (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            You Have Been Successfully Registered
          </Alert>
        </Snackbar>
      ) : (
        divSingUpForm
      )}
    </div>
  )
}

export default SingUp
