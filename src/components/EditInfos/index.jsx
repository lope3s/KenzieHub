import ButtonNewTechs from "../ButtonNewTechs"
import ButtonNewWorks from "../ButtonNewWorks"
import EditTechStatus from "../../components/EditTechStatus"
import { saveTechID } from "../../store/modules/techId/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"
import axios from "axios"
import { Container } from "./style"
import { BsTrashFill } from "react-icons/bs"
import { AiFillEdit } from "react-icons/ai"
import { AiOutlineClose } from "react-icons/ai"
import ProfilePreferences from "../../components/ProfilePreferences"
import { Button } from "@material-ui/core"
import EditWorkForm from "../EditWorkForm"

const EditInfos = ({ setPublisher }) => {
  const user = JSON.parse(localStorage.getItem("infoLogged"))
  const dispatch = useDispatch()
  const [changeTechStatus, setChangeTechStatus] = useState(false)
  const [edit, setEdit] = useState(false)

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

  const editWork = () => {
    setEdit(!edit)
  }

  const deleteWork = (id) => {
    const token = localStorage.getItem("token")
    axios
      .delete(`https://kenziehub.me/users/works/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
  }

  return (
    <Container>
      <div className="TechContainer">
        <div className="NewTechAcess">
          <span className="SessionName">Techs</span>
          <div className="NewTechContainer">
            <ButtonNewTechs />
          </div>
        </div>

        <div className="TechsEdits">
          <div className="TechListConatainer">
            {user.techs.map((tech, index) => {
              return (
                <div className="TechContainer" key={index}>
                  <span className="TechInfo">
                    {tech.title} - {tech.status}
                  </span>
                  <div className="buttonsContainer">
                    <button
                      className="EditTechStatusButton"
                      onClick={() => {
                        dispatch(saveTechID(tech.id))
                        setChangeTechStatus(true)
                      }}
                    >
                      <AiFillEdit />
                    </button>
                    <button
                      className="RemoveTechButton"
                      onClick={() => {
                        handleRemoveTech(tech.id)
                      }}
                    >
                      <BsTrashFill />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          {changeTechStatus && (
            <div className="EditTechStatusContainer">
              <EditTechStatus />
              <button
                className="CloseEditTechStatus"
                onClick={() => setChangeTechStatus(false)}
              >
                <AiOutlineClose />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="WorksContainer">
        <div className="NewWorkAcess">
          <span>Works</span>
          <div className="NewWorkContainer">
            <ButtonNewWorks />
          </div>
        </div>
        <div>
          {user.works.map((element) => (
            <div>
              <div>
                <p>{element.title}</p>
              </div>
              <button onClick={editWork}>Edit Work</button>
              <button onClick={() => deleteWork(element.id)}>
                Delete Work
              </button>
              {edit && <EditWorkForm id={element.id} />}
            </div>
          ))}
        </div>
      </div>
      <div className="PreferencesContainer">
        <span>Profile Prefrences</span>
        <ProfilePreferences />
      </div>
      <Button
        className="close"
        variant="contained"
        onClick={() => setPublisher(false)}
      >
        Close
      </Button>
    </Container>
  )
}

export default EditInfos
