import {
  ContainerLogo,
  SectionContent,
  ImageHomePage,
  LinkContent,
} from "./style"
import homePageImage from "./space discovery wb.svg"
import logo from "./logo.svg"
import { Link } from "react-router-dom"
import addUserThunk from "../../store/modules/listOfUsers/thunks"
import { useDispatch } from "react-redux"

const Home = () => {
  const dispatch = useDispatch()
  
  dispatch(addUserThunk([]))

  return (
    <>
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
      <LinkContent>
        <Link to="/list/page=1">meet our members</Link>
      </LinkContent>
    </>
  )
}

export default Home

{
  /* <ContainerRodape>KENZIEHUB ©</ContainerRodape> */
}
