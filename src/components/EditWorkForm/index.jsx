import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { TextField, Button } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";

const EditWorkForm = ({id}) => {
  const [error, setError] = useState("");
  const titleSchema = yup.object().shape({
    title: yup.string().required("cannot be blank")
  });
  const descriptionSchema =yup.object().shape({
    description: yup.string().required("cannot be blank")
  });
  const deployUrlSchema = yup.object().shape({  
    deployUrl: yup.string().required("cannot be blank")
  });

  // const { register, errors, handleSubmit } = useForm({
  //   resolver: yupResolver(schema),
  // });
  const titleField = useForm({ resolver: yupResolver(titleSchema) })
  const descriptionField = useForm({ resolver: yupResolver(descriptionSchema) })
  const deployUrlField = useForm({ resolver: yupResolver(deployUrlSchema) })

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
      <form onSubmit={titleField.handleSubmit(handleWorks)}>
        <TextField
          placeholder="Work Title"
          margin="normal"
          variant="outlined"
          name="title"
          error={!!titleField.errors.title}
          helperText={titleField.errors.title?.message}
          inputRef={titleField.register}
        />
        <Button type="" variant="contained" color="primary">
          Save
        </Button>
        {error && <p>{error}</p>}
      </form>
      <form onSubmit={descriptionField.handleSubmit(handleWorks)}>
        <TextField
          placeholder="Work Description"
          margin="normal"
          variant="outlined"
          name="description"
          error={!!descriptionField.errors.description}
          helperText={descriptionField.errors.description?.message}
          inputRef={descriptionField.register}
        />
        <Button type="" variant="contained" color="primary">
          Save
        </Button>
        {error && <p>{error}</p>}
      </form>
      <form onSubmit={deployUrlField.handleSubmit(handleWorks)}>
        <TextField
          placeholder="Work Deploy_Url"
          margin="normal"
          variant="outlined"
          name="deployUrl"
          error={!!deployUrlField.errors.deployUrl}
          helperText={deployUrlField.errors.deployUrl?.message}
          inputRef={deployUrlField.register}
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