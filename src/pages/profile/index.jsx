// import store from "../../store"
import { Main, Container, ContainerDiv, ContainerWork } from "./styles"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import validationThunk from "../../store/modules/validationToken/thunks"
import { useState, useEffect } from "react"
import EditInfos from "../../components/EditInfos"
import { FiSettings } from "react-icons/fi"
import addUserThunk from "../../store/modules/listOfUsers/thunks"

const Profile = () => {
  const dispatch = useDispatch()
  dispatch(addUserThunk([]))
  const [publisher, setPublisher] = useState(false)
  const [changeTechStatus, setChangeTechStatus] = useState(false)

  const auth = useSelector((state) => state.auth)
  const user = JSON.parse(localStorage.getItem("infoLogged"))
  const token = localStorage.getItem("token")
  console.log(user)
  useEffect(() => {
    dispatch(validationThunk())
  }, [])

  return (
    <Main publisher={publisher}>
      <ContainerDiv>
        {auth ? (
          <div className="Container">
            <Container>
              <div>
                <div>
                  {user.avatar_url ? (
                    <img alt={user.name} src={user.avatar_url}></img>
                  ) : (
                    <img
                      alt={`${user.name}, avatar padrão`}
                      src="https://uploads.metropoles.com/wp-content/uploads/2019/08/05090905/perfilsemfoto.jpg"
                    ></img>
                  )}
                </div>
                <div className="username">
                  <div>
                    <span>{user.name}</span>
                  </div>
                </div>
              </div>
            </Container>
            <div className="AboutContainer">
              {token && (
                <div className="buttonContainer">
                  <button className="Botao" onClick={() => setPublisher(true)}>
                    <FiSettings />
                  </button>
                </div>
              )}
              <div>
                <div className="About">About Me</div>
                <div className="AboutBio">{user.bio}</div>
              </div>
              <div className="PersonalDetails">
                <div>
                  <div>
                    <b>Personal Details</b>
                  </div>
                  <div className="Info">
                    <div>Email: {user.email}</div>
                    <div>
                      Course Module:{" "}
                      {user.course_module !== "undefined"
                        ? user.course_module
                        : " Nada encontrado"}
                    </div>
                  </div>
                </div>
                <div className="Techs">
                  <div>
                    <b>Techs</b>
                  </div>
                  <div>
                    {user.techs.length > 0 ? (
                      user.techs.map((element) => (
                        <div>
                          {element.title} - {element.status}
                        </div>
                      ))
                    ) : (
                      <div>No registration of Technologies</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ContainerWork>
                <div className="works">Works</div>
                <div>
                  <div className="MapWorks">
                    {user.works.length ? (
                      user.works.map((element) => (
                        <div>
                          {element.title} - {element.description}{" "}
                          {element.deploy_url}
                        </div>
                      ))
                    ) : (
                      <div>No work registration</div>
                    )}
                  </div>
                </div>
              </ContainerWork>
            </div>
          </div>
        ) : (
          <></>
        )}

        {publisher && <EditInfos setPublisher={setPublisher} />}
      </ContainerDiv>
    </Main>
  )
}

export default Profile
