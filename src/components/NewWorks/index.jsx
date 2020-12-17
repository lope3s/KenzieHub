import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { TextField, Button } from "@material-ui/core"
import { useEffect, useState } from "react"
import axios from "axios"
import { Container } from "./style"

const NewWorks = ({ setEditWorks, setUpdateInfo }) => {
  const dataLocal = JSON.parse(localStorage.getItem("infoLogged"))
  const [sucess, setSucess] = useState(null)
  const schema = yup.object().shape({
    title: yup.string().required("cannot be blank"),
    description: yup.string().required("cannot be blank"),
    deployUrl: yup.string().required("cannot be blank"),
  })

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })

  const handleWorks = (ev) => {
    const token = localStorage.getItem("token")
    console.log(ev.title, ev.description, ev.deployUrl)
    axios
      .post(
        "https://kenziehub.me/users/works",
        {
          title: ev.title,
          description: ev.description,
          deploy_url: ev.deployUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dataLocal.works.push(res.data)
        localStorage.setItem("infoLogged", JSON.stringify(dataLocal))
        setSucess(true)
        setUpdateInfo(true)
      })
      .catch((error) => setSucess(false))
  }

  useEffect(() => {
    if (sucess) {
      setTimeout(() => {
        setEditWorks(false)
      }, 3000)
    }
  }, [sucess])

  return (
    <Container>
      <form onSubmit={handleSubmit(handleWorks)}>
        <TextField
          placeholder="Title"
          margin="normal"
          variant="outlined"
          name="title"
          error={!!errors.title}
          helperText={errors.title?.message}
          inputRef={register}
        />
        <TextField
          placeholder="Description"
          margin="normal"
          variant="outlined"
          name="description"
          error={!!errors.description}
          helperText={errors.description?.message}
          inputRef={register}
        />
        <TextField
          placeholder="Deploy URL"
          margin="normal"
          variant="outlined"
          name="deployUrl"
          error={!!errors.deployUrl}
          helperText={errors.deployUrl?.message}
          inputRef={register}
        />
        <div className="buttons">
          <Button
            className="add"
            type="submit"
            variant="contained"
            color="primary"
          >
            Add
          </Button>
          <Button
            className="cancel"
            variant="contained"
            color="primary"
            onClick={() => setEditWorks(false)}
          >
            Cancel
          </Button>
        </div>
      </form>
      {sucess === true ? (
        <p className="message sucess">You have successfully added your work!</p>
      ) : sucess === false ? (
        <p className="message error">An error has occurred</p>
      ) : (
        ""
      )}
    </Container>
  )
}

export default NewWorks
