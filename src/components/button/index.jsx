import { useHistory } from "react-router-dom"

const Button = (text, link) => {
  const history = useHistory()
  return (
    <>
      <button onClick={() => history.push(`/${link}`)}>{text}</button>
    </>
  )
}

return Button
