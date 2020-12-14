import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { TextField, Button, Select, InputLabel} from "@material-ui/core"

import axios from 'axios'

const ProfilePreferences = () => {

    const token = localStorage.getItem("token")

    const contactSchema = yup.object().shape({
        contact: yup
        .string()
        .required('Cannot be blank')
    })

    const courseSchema = yup.object().shape({
        course_module: yup
        .string()
        .required('Cannot be blank')
    })

    const nameSchema = yup.object().shape({
        name: yup
        .string()
        .required('Cannot be blank')
        .matches(
            /^(.[a-zÀ-ÿ].+\s).+$/i,
            "Must have second name and can't have numbers or special characters."
          )
    })

    const passwordSchema = yup.object().shape({
        password: yup
        .string()
        .required("Cannot be blank")
        .min(6, 'Password must have at leat 6 characters'),

        old_password: yup
        .string()
        .required("Cannot be blank")
        .min(6, 'Password must have at leat 6 characters')
    })

    const emailSchema = yup.object().shape({
        email: yup
        .string()
        .required("Cannot be blank")
        .email('Invalid email')
    })

    const bioSchema = yup.object().shape({
        bio: yup
        .string()
    })

    const nameField = useForm({ resolver: yupResolver(nameSchema) })
    const passwordField = useForm({ resolver: yupResolver(passwordSchema) })
    const emailField = useForm({ resolver: yupResolver(emailSchema) })
    const contactField = useForm({ resolver: yupResolver(contactSchema) })
    const courseField = useForm({ resolver: yupResolver(courseSchema) })
    const bioField = useForm({ resolver: yupResolver(bioSchema) })

    const handleSubmit = (data) => {
        console.log(data)
        axios.put('https://kenziehub.me/profile', data, { headers: { Authorization: `Bearer ${token}` } })
        .then(res => console.log(res))
    }

    const handleAvatarChange = (e) => {
        const data = new FormData()

        data.append('avatar', e.target.files[0])
        console.log(data)

        axios.patch("https://kenziehub.me/users/avatar", data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then(res => console.log(res.data.avatar_url))
    }

    return (
    <div>
        <form onSubmit={contactField.handleSubmit(handleSubmit)}>
            <TextField
                margin="normal"
                variant="outlined"
                label = 'Contact' 
                name = 'contact' 
                error={!!contactField.errors.contact}
                helperText={contactField.errors.contact?.message}
                inputRef ={contactField.register}/>
            <Button type='submit'>Submit</Button>
        </form>
        <form onSubmit={courseField.handleSubmit(handleSubmit)}>
            <InputLabel>Course</InputLabel>
            <Select 
                variant="outlined"
                name = 'course_module'
                error={!!courseField.errors.course}
                native
                inputRef ={courseField.register}>
                <option aria-label="None" value=""/>
                <option value="First module (Introduction to Frontend)">First module (Introduction to Frontend)</option>
                <option value="Second module (Advanced Fronted)">Second module (Advanced Fronted)</option>
                <option value="Third module (Introduction to Backend)">Third module (Introduction to Backend)</option>
                <option value='Fourth module (Advanced Backend)'>Fourth module (Advanced Backend)</option>
            </Select>
            <Button type='submit'>Submit</Button>
    </form>
        <form onSubmit={nameField.handleSubmit(handleSubmit)}>
        <TextField
                margin="normal"
                variant="outlined"
                label = 'Name' 
                name = 'name' 
                error={!!nameField.errors.name}
                helperText={nameField.errors.name?.message}
                inputRef ={nameField.register}/>
            <Button type='submit'>Submit</Button>
        </form>
        <form onSubmit={emailField.handleSubmit(handleSubmit)}>
        <TextField
                margin="normal"
                variant="outlined"
                label = 'Email' 
                name = 'email' 
                error={!!emailField.errors.email}
                helperText={emailField.errors.email?.message}
                inputRef ={emailField.register}/>
            <Button type='submit'>Submit</Button>
        </form>
        <form onSubmit={passwordField.handleSubmit(handleSubmit)}>
        <TextField
                margin="normal"
                variant="outlined"
                label = 'New Password' 
                name = 'password' 
                type='password'
                error={!!passwordField.errors.password}
                helperText={passwordField.errors.password?.message}
                inputRef ={passwordField.register}/>
             <TextField
                margin="normal"
                variant="outlined"
                label = 'Old Password' 
                name = 'old_password' 
                type='password'
                error={!!passwordField.errors.password}
                helperText={passwordField.errors.old_password?.message}
                inputRef ={passwordField.register}/>
            <Button type='submit'>Submit</Button>
        </form>
        <form onSubmit={bioField.handleSubmit(handleSubmit)}>
        <TextField
                margin="normal"
                variant="outlined"
                label = 'Bio' 
                name = 'bio' 
                multiline
                rows={3}
                error={!!bioField.errors.bio}
                helperText={bioField.errors.bio?.message}
                inputRef ={bioField.register}/>
            <Button type='submit'>Submit</Button>
        </form>
        <TextField
            type='file'
            margin="normal"
            variant="outlined"
            onChange={e => handleAvatarChange(e)}
        />
    </div>
    )
}

export default ProfilePreferences