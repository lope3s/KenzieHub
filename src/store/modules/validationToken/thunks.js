import axios from "axios"
import { validation } from "./action"

const validationThunk = () => async (dispatch, getState) => {
  const token = localStorage.getItem("token")
  try {
    const res = await axios.put(
      "https://kenziehub.me/profile",
      { body: {} },
      { headers: { Authorization: `Bearer ${token}` } }
    )
    if (res) {
      dispatch(validation(true))
    }
  } catch (error) {
    console.log(error)
    dispatch(validation(false))
  }
}

export default validationThunk
