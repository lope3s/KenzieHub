import { Main, Container, ContainerDiv, ContainerWork } from "./styles";
import { useState } from "react";
import EditInfos from "../../components/EditInfos";
import { FiSettings } from "react-icons/fi";
const UserSearch = () => {
  
  const [publisher, setPublisher] = useState(false);

  const user = JSON.parse(localStorage.getItem("userSearch"));
  console.log(user);


  return (
    <Main publisher={publisher}>
      <ContainerDiv>
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
                    {user.techs.length > 0 ? (
                      user.techs.map((element) => (
                        <div>
                          {element.title} - {element.status}
                        </div>
                      ))
                    ) : (
                      <div>Não tenho registro de Tecnologias</div>
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
        <button className="Botao" onClick={() => setPublisher(true)}>
          <FiSettings />
        </button>
        {publisher && <EditInfos setPublisher={setPublisher} />}
      </ContainerDiv>
    </Main>
  );
};

export default UserSearch;
