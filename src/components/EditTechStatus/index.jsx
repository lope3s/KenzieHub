import { useSelector } from "react-redux"
import { Select, Button } from "@material-ui/core"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState, useEffect } from "react"
import axios from "axios"
import { Container } from "./style"

const EditTechStatus = ({ setChangeTechStatus }) => {
  const [newStatus, setNewStatus] = useState("")
  const [sucess, setSucess] = useState(null)
  const techInfos = useSelector((state) => state.techInfos)
  const schema = yup.object().shape({
    status: yup.string(),
  })

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })

  const handleChangeTech = (ev) => {
    const token = localStorage.getItem("token")
    console.log({ sucess })

    axios
      .put(
        `https://kenziehub.me/users/techs/${techInfos.id}`,
        {
          status: ev.status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => setSucess(true))
      .catch((error) => setSucess(false))
  }

  const handleNewStatus = (ev) => {
    setNewStatus(ev.target.value)
  }

  useEffect(() => {
    if (sucess) {
      setTimeout(() => {
        setChangeTechStatus(false)
      }, 3000)
    }
  }, [sucess])

  return (
    <Container>
      <p className="title">{techInfos.title}</p>
      <p className="status">{techInfos.status}</p>
      <form onSubmit={handleSubmit(handleChangeTech)}>
        <Select
          variant="outlined"
          inputRef={register}
          name="status"
          error={!!errors.status}
          native
          value={newStatus}
          onChange={handleNewStatus}
          inputProps={{
            name: "status",
            id: "status",
          }}
        >
          <option aria-label="None" value="" />
          <option value="Iniciante">Beginner</option>
          <option value="Intermediário">intermediary</option>
          <option value="Avançado">Advanced</option>
        </Select>
        <div className="buttons">
          <Button
            className="btn change"
            type="submit"
            variant="contained"
            color="primary"
          >
            Change
          </Button>
          <Button
            className="btn cancel"
            variant="contained"
            color="primary"
            onClick={() => {
              setChangeTechStatus(false)
            }}
          >
            Cancel
          </Button>
        </div>
      </form>
      {sucess === true ? (
        <p className="message sucess">
          You have successfully changed the status!
        </p>
      ) : sucess === false ? (
        <p className="message error">An error has occurred</p>
      ) : (
        ""
      )}
    </Container>
  )
}

export default EditTechStatus
