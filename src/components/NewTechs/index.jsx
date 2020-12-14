import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { TextField, Button, Select } from "@material-ui/core"
import { useState } from "react"
import axios from "axios"
import { Container } from "./style"

const NewTech = ({ setEditTechs }) => {
  const [level, setLevel] = useState("")
  const [error, setError] = useState("")
  const schema = yup.object().shape({
    title: yup.string().required("cannot be blank"),
    status: yup.string().required("cannot be blank"),
  })

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })

  const handleTechs = (ev) => {
    const token = localStorage.getItem("token")
    axios
      .post(
        "https://kenziehub.me/users/techs",
        {
          title: ev.title,
          status: ev.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res))
      .catch(() =>
        setError(
          "User Already have this technology created you can only update it"
        )
      )
  }

  const handleLevel = (ev) => {
    const techLevel = ev.target.value
    setLevel(techLevel)
  }

  return (
    <Container>
      <form onSubmit={handleSubmit(handleTechs)}>
        <TextField
          placeholder="Tech Name"
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
            onClick={() => setEditTechs(false)}
          >
            Cancel
          </Button>
        </div>
        {error && <p>{error}</p>}
      </form>
    </Container>
  )
}

export default NewTech
