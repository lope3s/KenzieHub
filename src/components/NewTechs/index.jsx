import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { TextField, Button, Select } from "@material-ui/core"
import { useState } from "react"
import axios from "axios"

const NewTech = () => {
  const [level, setLevel] = useState("")
  const schema = yup.object().shape({
    title: yup.string().required("cannot be blank"),
    status: yup.string().required("cannot be blank"),
  })

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })

  const handleTechs = (ev) => {
    console.log({
      title: ev.title,
      status: ev.status,
    })
    const token = localStorage.getItem("token")
    axios
      .post(
        "https://kenziehub.me/users/techs",
        {
          body: {
            title: ev.title,
            status: ev.status,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
  }

  const handleLevel = (ev) => {
    const techLevel = ev.target.value
    setLevel(techLevel)
  }

  return (
    <>
      <form onSubmit={handleSubmit(handleTechs)}>
        <TextField
          margin="normal"
          variant="outlined"
          name="title"
          error={!!errors.title}
          helperText={errors.title?.message}
          inputRef={register}
        />
        <Select
          variant="outlined"
          inputRef={register}
          name="status"
          error={!!errors.status}
          native
          value={level}
          onChange={handleLevel}
          inputProps={{
            name: "status",
            id: "status",
          }}
        >
          <option aria-label="None" value="" />
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </Select>
        <Button type="" variant="contained" color="primary">
          Save
        </Button>
      </form>
    </>
  )
}

export default NewTech
