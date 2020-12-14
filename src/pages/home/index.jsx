import ButtonRedirect from "../../components/ButtonRedirect";
import { Container, ContainerImage, ContainerRodape } from "./style";
import logo from "./logo.svg";
const Home = () => {
  return (
    <div>
      <ContainerImage>
        <img src={logo} alt="Logo Home"></img>
        <div>WELCOME!</div>
      </ContainerImage>
    </div>
  );
};

export default Home;
