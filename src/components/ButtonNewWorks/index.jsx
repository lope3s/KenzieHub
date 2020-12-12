import { useState } from "react"
import NewWorks from "../NewWorks"

const ButtonNewWorks = () => {
  const [editWorks, setEditWorks] = useState(false)
  const handleShowWorks = () => {
    setEditWorks(!editWorks)
  }
  return (
    <>
      <button onClick={handleShowWorks}>New Works</button>
      {editWorks && <NewWorks />}
    </>
  )
}

export default ButtonNewWorks
