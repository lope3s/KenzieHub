import { useHistory } from "react-router-dom"

const ButtonRedirect = ({ text, link }) => {
  const history = useHistory()
  return (
    <>
      <button onClick={() => history.push(`/${link}`)}>{text}</button>
    </>
  )
}

export default ButtonRedirect
