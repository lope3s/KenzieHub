import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

const EditWorkForm = ({id}) => {
  const [error, setError] = useState("");
  const schema = yup.object().shape({
    title: yup.string().required("cannot be blank"),
    description: yup.string().required("cannot be blank"),
    deployUrl: yup.string().required("cannot be blank"),
  });

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleWorks = (ev) => {
    const token = localStorage.getItem("token");
    axios
      .put(
        `https://kenziehub.me/users/works/${id}`,
        {
          title: ev.title,
          description: ev.description,
          deploy_url: ev.deployUrl,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .catch(() =>
        setError(
          "The user has already created this job, you can only update it"
        )
      );
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleWorks)}>
        <TextField
          placeholder="Work Title"
          margin="normal"
          variant="outlined"
          name="title"
          value=""
          error={!!errors.title}
          helperText={errors.title?.message}
          inputRef={register}
        />
        <TextField
          placeholder="Work Description"
          margin="normal"
          variant="outlined"
          name="description"
          value=""
          error={!!errors.description}
          helperText={errors.description?.message}
          inputRef={register}
        />
        <TextField
          placeholder="Work Deploy_Url"
          margin="normal"
          variant="outlined"
          name="deployUrl"
          value=""
          error={!!errors.deployUrl}
          helperText={errors.deployUrl?.message}
          inputRef={register}
        />
        <Button type="" variant="contained" color="primary">
          Save
        </Button>
        {error && <p>{error}</p>}
      </form>
    </>
      );
    };
    
    export default EditWorkForm;