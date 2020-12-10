import axios from "axios"
import { validation } from "./action"

const validationThunk = () => (dispatch, getState) => {
  const token = localStorage.getItem("token")
  axios
    .patch("https://kenziehub.me/users/avatar", {
      Authorization: {
        Bearer: { token },
      },
    })
    .then((res) => dispatch(validation(true)))
    .catch((err) => console.log(err))
}

export default validationThunk
