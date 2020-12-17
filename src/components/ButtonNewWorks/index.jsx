import { useState } from "react"
import NewWorks from "../NewWorks"
import { Button } from "@material-ui/core"
import { Container } from "./style"

const ButtonNewWorks = ({ setUpdateInfo }) => {
  const [editWorks, setEditWorks] = useState(false)
  const handleShowWorks = () => {
    setEditWorks(true)
  }
  return (
    <Container>
      <Button variant="contained" color="primary" onClick={handleShowWorks}>
        New Works
      </Button>
      {editWorks && (
        <NewWorks setEditWorks={setEditWorks} setUpdateInfo={setUpdateInfo} />
      )}
    </Container>
  )
}

export default ButtonNewWorks
