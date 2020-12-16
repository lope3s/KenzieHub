import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { TextField, Button, Select } from "@material-ui/core"
import { useState, useEffect } from "react"
import axios from "axios"
import { Container } from "./style"

const NewTech = ({ setEditTechs }) => {
  const [level, setLevel] = useState("")
  const [error, setError] = useState(false)
  const [sucess, setSucess] = useState(false)
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
      .then((res) => {
        setSucess(true)
      })
      .catch(() => setError(true))
  }

  const handleLevel = (ev) => {
    const techLevel = ev.target.value
    setLevel(techLevel)
  }

  useEffect(() => {
    setTimeout(() => {
      if (sucess === true) {
        setEditTechs(false)
      }
      setError(false)
      setSucess(false)
    }, 3000)
  }, [error, sucess])

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
          placeholder="Status"
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
          <option value="Begginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
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
        {error && (
          <p className="message error">
            User Already have this technology created you can only update it!
          </p>
        )}
        {sucess && (
          <p className="message sucess">
            You have successfully added the technology!
          </p>
        )}
      </form>
    </Container>
  )
}

export default NewTech
