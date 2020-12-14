import { ContainerLogo, SectionContent, ImageHomePage } from "./style"
import homePageImage from "./space discovery wb.svg"
import logo from "./logo.svg"

const Home = () => {
  return (
    <SectionContent>
      <ContainerLogo>
        <img src={logo} alt="Logo Home"></img>
        <p>Hello, Codernaut !</p>
        <p>Welcome to Our</p>
        <p>Developer's Space</p>
      </ContainerLogo>
      <ImageHomePage>
        <img src={homePageImage} alt="codernaut" />
      </ImageHomePage>
    </SectionContent>
  )
}

export default Home

{
  /* <ContainerRodape>KENZIEHUB ©</ContainerRodape> */
}
