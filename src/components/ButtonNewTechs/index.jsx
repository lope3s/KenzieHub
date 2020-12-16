import { useState } from "react"
import NewTech from "../NewTechs"
import { Button } from "@material-ui/core"
import { Container } from "./style"

const ButtonNewTechs = ({ setUpdateInfo }) => {
  const [editTechs, setEditTechs] = useState(false)
  const handleShowTechs = () => {
    setEditTechs(true)
  }
  return (
    <Container>
      <Button variant="contained" color="primary" onClick={handleShowTechs}>
        New Tech
      </Button>
      {editTechs && (
        <NewTech setEditTechs={setEditTechs} setUpdateInfo={setUpdateInfo} />
      )}
    </Container>
  )
}

export default ButtonNewTechs
