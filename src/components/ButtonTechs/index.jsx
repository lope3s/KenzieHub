import { useState } from "react"
import NewTech from "../NewTechs"

const ButtonTechs = () => {
  const [editTechs, setEditTechs] = useState(false)
  const handleShowTechs = () => {
    setEditTechs(!editTechs)
  }
  return (
    <>
      <button onClick={handleShowTechs}>New Tech</button>
      {editTechs && <NewTech />}
    </>
  )
}

export default ButtonTechs
