import { useSelector } from "react-redux"
import { Select, Button } from "@material-ui/core"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import axios from "axios"

const EditTechStatus = () => {
  const [newStatus, setNewStatus] = useState("")
  const techID = useSelector((state) => state.techID)
  const schema = yup.object().shape({
    status: yup.string(),
  })

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  })

  const handleChangeTech = (ev) => {
    const token = localStorage.getItem("token")
    console.log({ status: ev.status })

    axios
      .put(
        `https://kenziehub.me/users/techs/${techID}`,
        {
          status: ev.status,
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

  const handleNewStatus = (ev) => {
    setNewStatus(ev.target.value)
  }

  return (
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
      <Button type="submit" variant="contained" color="primary">
        Change
      </Button>
    </form>
  )
}

export default EditTechStatus
