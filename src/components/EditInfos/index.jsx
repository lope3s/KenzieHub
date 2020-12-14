import ButtonNewTechs from "../ButtonNewTechs"
import ButtonNewWorks from "../ButtonNewWorks"
import EditTechStatus from "../../components/EditTechStatus"
import { saveTechID } from "../../store/modules/techId/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"
import axios from "axios"

const EditInfos = () => {
  const user = JSON.parse(localStorage.getItem("infoLogged"))
  const dispatch = useDispatch()
  const [changeTechStatus, setChangeTechStatus] = useState(false)

  const handleRemoveTech = (id) => {
    console.log(id)
    const token = localStorage.getItem("token")
    axios
      .delete(`https://kenziehub.me/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
  }

  return (
    <>
      <div className="TechContainer">
        <span>Techs</span>
        <div className="NewTechContainer">
          <ButtonNewTechs />
        </div>
        <div className="TechsListContainer">
          {user.techs.map((tech, index) => {
            return (
              <div className="TechContainer" key={index}>
                <span className="TechInfo">
                  {tech.title} - {tech.status}
                </span>
                <button
                  className="EditTechStatusButton"
                  onClick={() => {
                    dispatch(saveTechID(tech.id))
                    setChangeTechStatus(true)
                  }}
                >
                  Edit Status
                </button>
                <button
                  className="RemoveTechButton"
                  onClick={() => {
                    handleRemoveTech(tech.id)
                  }}
                >
                  Exluir Tech
                </button>
              </div>
            )
          })}
          {changeTechStatus && (
            <div className="EditTechStatusContainer">
              <EditTechStatus />
              <button
                className="CloseEditTechStatus"
                onClick={() => setChangeTechStatus(false)}
              >
                Fechar
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="WorksContainer">
        <span>Works</span>
        <div className="NewWorkContainer">
          <ButtonNewWorks />
        </div>
      </div>
      <div className="PreferencesContainer">
        <span>Profile Prefrences</span>
      </div>
    </>
  )
}

export default EditInfos
