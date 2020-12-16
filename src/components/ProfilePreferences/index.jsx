import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { TextField, Button, Select, InputLabel } from "@material-ui/core"
import { Container } from "./style"

import axios from "axios"

const ProfilePreferences = () => {
  const dataLocal = JSON.parse(localStorage.getItem("infoLogged"))
  const token = localStorage.getItem("token")

  const contactSchema = yup.object().shape({
    contact: yup.string().required("Cannot be blank"),
  })

  const courseSchema = yup.object().shape({
    course_module: yup.string().required("Cannot be blank"),
  })

  const nameSchema = yup.object().shape({
    name: yup
      .string()
      .required("Cannot be blank")
      .matches(
        /^(.[a-zÀ-ÿ].+\s).+$/i,
        "Must have second name and can't have numbers or special characters."
      ),
  })

  const passwordSchema = yup.object().shape({
    password: yup
      .string()
      .required("Cannot be blank")
      .min(6, "Password must have at leat 6 characters"),

    old_password: yup
      .string()
      .required("Cannot be blank")
      .min(6, "Password must have at leat 6 characters"),
  })

  const emailSchema = yup.object().shape({
    email: yup.string().required("Cannot be blank").email("Invalid email"),
  })

  const bioSchema = yup.object().shape({
    bio: yup.string(),
  })

  const nameField = useForm({ resolver: yupResolver(nameSchema) })
  const passwordField = useForm({ resolver: yupResolver(passwordSchema) })
  const emailField = useForm({ resolver: yupResolver(emailSchema) })
  const contactField = useForm({ resolver: yupResolver(contactSchema) })
  const courseField = useForm({ resolver: yupResolver(courseSchema) })
  const bioField = useForm({ resolver: yupResolver(bioSchema) })

  console.log(JSON.parse(localStorage.getItem("infoLogged")))

  const handleSubmit = (data) => {
    console.log(data)
    axios
      .put("https://kenziehub.me/profile", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // localStorage.removeItem("infoLogged")
        localStorage.setItem("infoLogged", JSON.stringify(res.data))
        console.log(JSON.parse(localStorage.getItem("infoLogged")))
      })
  }

  const handleAvatarChange = (e) => {
    const data = new FormData()

    data.append("avatar", e.target.files[0])
    console.log(data)

    axios
      .patch("https://kenziehub.me/users/avatar", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        dataLocal.avatar_url = res.data.avatar_url
        localStorage.setItem("infoLogged", JSON.stringify(dataLocal))
      })
  }

  return (
    <Container>
      <form onSubmit={contactField.handleSubmit(handleSubmit)}>
        <div className="inputField">
          <TextField
            margin="normal"
            variant="outlined"
            placeholder="Contact"
            name="contact"
            error={!!contactField.errors.contact}
            helperText={contactField.errors.contact?.message}
            inputRef={contactField.register}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
      <form onSubmit={courseField.handleSubmit(handleSubmit)}>
        <div className="inputField">
          <div>
            <InputLabel>Course</InputLabel>
            <Select
              variant="outlined"
              name="course_module"
              error={!!courseField.errors.course}
              native
              inputRef={courseField.register}
            >
              <option aria-label="None" value="" />
              <option value="First module (Introduction to Frontend)">
                First module (Introduction to Frontend)
              </option>
              <option value="Second module (Advanced Fronted)">
                Second module (Advanced Fronted)
              </option>
              <option value="Third module (Introduction to Backend)">
                Third module (Introduction to Backend)
              </option>
              <option value="Fourth module (Advanced Backend)">
                Fourth module (Advanced Backend)
              </option>
            </Select>
          </div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
      <form onSubmit={nameField.handleSubmit(handleSubmit)}>
        <div className="inputField">
          <TextField
            margin="normal"
            variant="outlined"
            placeholder="Name"
            name="name"
            error={!!nameField.errors.name}
            helperText={nameField.errors.name?.message}
            inputRef={nameField.register}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
      <form onSubmit={emailField.handleSubmit(handleSubmit)}>
        <div className="inputField">
          <TextField
            margin="normal"
            variant="outlined"
            placeholder="Email"
            name="email"
            error={!!emailField.errors.email}
            helperText={emailField.errors.email?.message}
            inputRef={emailField.register}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
      <form onSubmit={passwordField.handleSubmit(handleSubmit)}>
        <div className="inputField pass">
          <div>
            <TextField
              margin="normal"
              variant="outlined"
              placeholder="New Password"
              name="password"
              type="password"
              error={!!passwordField.errors.password}
              helperText={passwordField.errors.password?.message}
              inputRef={passwordField.register}
            />
            <TextField
              margin="normal"
              variant="outlined"
              placeholder="Old Password"
              name="old_password"
              type="password"
              error={!!passwordField.errors.password}
              helperText={passwordField.errors.old_password?.message}
              inputRef={passwordField.register}
            />
          </div>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
      <form onSubmit={bioField.handleSubmit(handleSubmit)}>
        <div className="inputField inputFieldBio">
          <TextField
            className="bio"
            margin="normal"
            variant="outlined"
            placeholder="Bio"
            name="bio"
            multiline
            rows={3}
            error={!!bioField.errors.bio}
            helperText={bioField.errors.bio?.message}
            inputRef={bioField.register}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </div>
      </form>
      <div className="inputField">
        <TextField
          className="file"
          type="file"
          margin="normal"
          variant="outlined"
          onChange={(e) => handleAvatarChange(e)}
        />
      </div>
    </Container>
  )
}

export default ProfilePreferences
