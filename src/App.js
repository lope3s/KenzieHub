import Header from "./components/Header"
import Routes from "./routes"
import { Container } from "./style"
import './style.css'

const App = () => {
  return (
    <Container>
      <Header />
      <Routes />
    </Container>
  )
}

export default App
