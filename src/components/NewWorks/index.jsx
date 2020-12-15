import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { TextField, Button } from "@material-ui/core"
import { useState } from "react"
import axios from "axios"
import { Container } from "./style"

const NewWorks = ({ setEditWorks }) => {
  const [error, setError] = useState("")
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
      .catch(() =>
        setError("User Already have this Work, created you can only update it")
      )
  }

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
        {error && <p>{error}</p>}
      </form>
    </Container>
  )
}

export default NewWorks
