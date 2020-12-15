// import store from "../../store"
import { Container, ContainerDiv, ContainerWork } from "./styles";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import validationThunk from "../../store/modules/validationToken/thunks";
import { useState, useEffect } from "react";
import EditInfos from "../../components/EditInfos";

const Profile = () => {
  const dispatch = useDispatch();
  const [publisher, setPublisher] = useState(false);
  const [changeTechStatus, setChangeTechStatus] = useState(false);

  const auth = useSelector((state) => state.auth);
  const user = JSON.parse(localStorage.getItem("infoLogged"));
  console.log(user);
  useEffect(() => {
    dispatch(validationThunk());
  }, []);

  return (
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
              <div>
                <div>
                  <span>{user.name}</span>
                </div>
              </div>
            </div>
          </Container>
          <div className="AboutContainer">
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
                    Course Module:
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
                  {user.techs ? (
                    user.techs.map((element) => (
                      <div>
                        {element.title} - {element.status}
                      </div>
                    ))
                  ) : (
                    <div>Não temo registro de serviços</div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div>
            <ContainerWork>
              <div>Works</div>
              <div>
                <div className="MapWorks">
                  {user.work ? (
                    user.works.map((element) => (
                      <div>
                        <div>{element.title}</div>
                        <div>{element.description}</div>
                      </div>
                    ))
                  ) : (
                    <div>Não temo registro de serviços</div>
                  )}
                </div>
              </div>
            </ContainerWork>
          </div>
        </div>
      ) : (
        <></>
      )}
      <button onClick={() => setPublisher(!publisher)}>Edição de Perfil</button>
      {publisher && <EditInfos />}
    </ContainerDiv>
  );
};

export default Profile;
