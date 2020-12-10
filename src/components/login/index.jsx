import { useForm } from "react-hook-form";

import { TextField } from "@material-ui/core";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  const schema = yup.object().shape({
    userName: yup.string().required("Cannot be blank"),
    password: yup.string().required("Cannot be blank"),
  });

  const { register, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <fieldset>
        <legend>Login</legend>
        <form>
          <TextField
            margin="normal"
            variant="outlined"
            name="userName"
            error={!!errors.userName}
            helperText={errors.userName?.message}
            inputRef={register}
          />
          <TextField
            margin="normal"
            variant="outlined"
            name="password"
            type="password"
            error={!!errors.password}
            helperText={errors.password?.message}
            inputRef={register}
          />
        </form>
      </fieldset>
    </div>
  );
};

export default Login;
