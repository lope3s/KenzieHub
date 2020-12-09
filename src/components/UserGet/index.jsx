import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addUsers } from "../../store/modules/listOfUsers/actions";

const UserGet = () => {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://kenziehub.me/users")
      .then((res) => {
        setUsers(res.data);
        dispatch(addUsers(users));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <></>;
};
export default UserGet;
