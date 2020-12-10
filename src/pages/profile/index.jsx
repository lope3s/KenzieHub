import store from "../../store";
import { Container, ContainerContact } from "./styles";
const Profile = () => {
  const User = store.getState().User;
  return (
    <div>
      <Container>
        {User.map((element, index) => (
          <div key={index}>
            <div>
              <img alt={element.user.name} src={element.user.avatar_url}></img>
            </div>
            <div>
              <div>
                <span>{element.user.name}</span>
              </div>
            </div>
          </div>
        ))}
      </Container>
      {User.map((element, index) => (
        <div key={index}>
          <div>
            <div>About Me</div>
            <div>{element.user.bio}</div>
          </div>

          <div>
            <div>Personal Details</div>
            <div>
              <div>Email:{element.user.email}</div>
              <div>Course Module: {element.user.course_module}</div>
            </div>
          </div>

          <div>Techs</div>
          <div>
            {element.user.techs.map((element, index) => (
              <div key={index}>
                {element.title} - {element.status}
              </div>
            ))}
          </div>
        </div>
      ))}
      {User.map((element, index) => (
        <div key={index}>
          <div>
            <div>Works</div>
            <div>
              {element.user.works.map((element, index) => (
                <div key={index}>
                  <p>{element.title}</p>
                  <div>{element.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profile;
