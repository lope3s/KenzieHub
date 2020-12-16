import ButtonNewTechs from "../ButtonNewTechs"
import ButtonNewWorks from "../ButtonNewWorks"
import EditTechStatus from "../../components/EditTechStatus"
import { saveTechInfos } from "../../store/modules/techInfos/actions"
import { saveWorkInfos } from "../../store/modules/WorkInfos/actions"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"
import { Container } from "./style"
import { BsTrashFill } from "react-icons/bs"
import { AiFillEdit } from "react-icons/ai"
import ProfilePreferences from "../../components/ProfilePreferences"
import { Button } from "@material-ui/core"
import EditWorkForm from "../EditWorkForm"
import settings from "./settings.svg"

const EditInfos = ({ setPublisher }) => {
  let user = JSON.parse(localStorage.getItem("infoLogged"))
  const dispatch = useDispatch()
  const [changeTechStatus, setChangeTechStatus] = useState(false)
  const [edit, setEdit] = useState(false)
  const [updateInfo, setUpdateInfo] = useState(false)

  const changeInfos = () => {
    user = JSON.parse(localStorage.getItem("infoLogged"))
    setUpdateInfo(false)
  }

  useEffect(() => {
    if (updateInfo) {
      console.log({
        updateInfo,
        techs: user.techs,
      })
      changeInfos()
    }
  }, [updateInfo])

  const handleRemoveTech = (id) => {
    console.log(id)
    const token = localStorage.getItem("token")
    axios
      .delete(`https://kenziehub.me/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let currentTechs = user.techs.filter((current) => current.id !== id)
        user.techs = currentTechs
        localStorage.setItem("infoLogged", JSON.stringify(user))
        setUpdateInfo(true)
      })
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
      .then((res) => {
        let currentWorks = user.works.filter((current) => current.id !== id)
        user.works = currentWorks
        localStorage.setItem("infoLogged", JSON.stringify(user))
        setUpdateInfo(true)
      })
      .catch((error) => console.log(error))
  }

  return (
    <Container>
      <div className="closeContainer">
        <Button
          className="close"
          variant="contained"
          onClick={() => setPublisher(false)}
        >
          <span>Finish</span>
        </Button>
      </div>
      <div className="TechContainer">
        <div className="NewTechAcess">
          <span className="SessionName">Techs</span>
          <div className="NewTechContainer">
            <ButtonNewTechs setUpdateInfo={setUpdateInfo} />
          </div>
        </div>

        <div className="TechsEdits">
          <div className="TechListContainer">
            {user.techs.map((tech, index) => {
              return (
                <div className="TechContainer" key={index}>
                  <div className="TechInfo">
                    <span className="title">{tech.title}</span>
                    <span className="status">{tech.status}</span>
                  </div>
                  <div className="buttonsContainer">
                    <button
                      className="EditTechStatusButton"
                      onClick={() => {
                        dispatch(saveTechInfos(tech))
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
              <EditTechStatus
                setChangeTechStatus={setChangeTechStatus}
                setUpdateInfo={setUpdateInfo}
              />
            </div>
          )}
        </div>
      </div>
      <div className="WorksContainer">
        <div className="NewWorkAcess">
          <span className="SessionName">Works</span>
          <div className="NewWorkContainer">
            <ButtonNewWorks setUpdateInfo={setUpdateInfo} />
          </div>
        </div>
        <div className="WorkCardsContainer">
          {user.works.map((element) => (
            <div className="WorkCardContainer">
              <div className="WorkInfoContainer">
                <p className="title">{element.title}</p>
                <p className="description">{element.description}</p>
                <a className="url" href={element.deploy_url}>
                  {element.deploy_url}
                </a>
              </div>
              <div className="buttons">
                <button
                  className="edit"
                  onClick={() => {
                    dispatch(saveWorkInfos(element))
                    setEdit(true)
                  }}
                >
                  <AiFillEdit />
                </button>
                <button
                  className="delete"
                  onClick={() => {
                    deleteWork(element.id)
                  }}
                >
                  <BsTrashFill />
                </button>
              </div>
            </div>
          ))}
          {edit && (
            <EditWorkForm setEdit={setEdit} setUpdateInfo={setUpdateInfo} />
          )}
        </div>
      </div>
      <div className="preferencesDivisor">
        <div className="PreferencesContainer">
          <span className="title">Profile Prefrences</span>
          <ProfilePreferences />
        </div>
        <img src={settings} alt="Settings" />
      </div>
    </Container>
  )
}

export default EditInfos
