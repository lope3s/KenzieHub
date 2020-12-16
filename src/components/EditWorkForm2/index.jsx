import { useSelector } from "react-redux";
import { Select, Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "./style"

const EditWorkFrom = ({ setEdit }) => {
  const [newStatus, setNewStatus] = useState("");
  const [sucess, setSucess] = useState(null);
  const techInfos = useSelector((state) => state.workInfos);
  const schema = yup.object().shape({
    status: yup.string(),
  });
  const [error, setError] = useState("");
  const titleSchema = yup.object().shape({
    title: yup.string().required("cannot be blank"),
  });
  const descriptionSchema = yup.object().shape({
    description: yup.string().required("cannot be blank"),
  });
  const deployUrlSchema = yup.object().shape({
    deployUrl: yup.string().required("cannot be blank"),
  });

  const titleField = useForm({ resolver: yupResolver(titleSchema) });
  const descriptionField = useForm({
    resolver: yupResolver(descriptionSchema),
  });
  const deployUrlField = useForm({ resolver: yupResolver(deployUrlSchema) });

  const { register, errors, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleWorks = (ev) => {
    const token = localStorage.getItem("token");
    axios
      .put(
        `https://kenziehub.me/users/works/${techInfos.id}`,
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

  const handleNewStatus = (ev) => {
    setNewStatus(ev.target.value);
  };

  useEffect(() => {
    if (sucess) {
      setTimeout(() => {
        setEdit(false);
      }, 3000);
    }
  }, [sucess]);

  return (
    <Container>
    <p className="title">{techInfos.title}</p>
      <p className="description">{techInfos.description}</p>
      <p className="deployUrl">{techInfos.deploy_url}</p>
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
        <Button className="btn change"
            type="submit"
            variant="contained"
            color="primary">
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
        <Button className="btn change"
            type="submit"
            variant="contained"
            color="primary">
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
        <Button className="btn change"
            type="submit"
            variant="contained"
            color="primary">
          Save
        </Button>
        {error && <p>{error}</p>}
      </form>
      <from>
        <Button
          className="btn cancel"
          variant="contained"
          color="secondary"
          onClick={() => {
            setEdit(false);
          }}
        >
          Cancel
        </Button>
      </from>
      </Container>
  );
};

export default EditWorkFrom;
