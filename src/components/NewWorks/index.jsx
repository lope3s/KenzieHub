import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { TextField, Button } from "@material-ui/core"
import { useState } from "react"
import axios from "axios"

const NewWorks = () => {
  const [level, setLevel] = useState("")
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
    console.log(ev.title,ev.description,ev.deployUrl)
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
        setError(
          "User Already have this Work, created you can only update it"
        )
      )
  }

  const handleLevel = (ev) => {
    const WorksLevel = ev.target.value
    setLevel(WorksLevel)
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleWorks)}>
      <TextField
      placeholder="Works Title"
          margin="normal"
          variant="outlined"
          name="title"
          error={!!errors.title}
          helperText={errors.title?.message}
          inputRef={register}
        />
         <TextField
         placeholder="Works Description"
          margin="normal"
          variant="outlined"
          name="description"
          error={!!errors.description}
          helperText={errors.description?.message}
          inputRef={register}
        />
         <TextField
         placeholder="Works Deploy_url"
          margin="normal"
          variant="outlined"
          name="deployUrl"
          error={!!errors.deployUrl}
          helperText={errors.deployUrl?.message}
          inputRef={register}
        />
        <Button type="" variant="contained" color="primary">
          Add
        </Button>
        {error && <p>{error}</p>}
      </form>
    </>
  )
}

export default NewWorks
