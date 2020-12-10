import {useState} from 'react';

import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const SingUp = () =>{
  const schema = yup.object().shape({

    name:yup
    .string()
    .required("Campo Obrigatório")
    .min(6),

    password:yup
    .string()
    .required("Campo Obrigatório"),
    
    confirmPassword:yup
    .string()
    .required("Campo Obrigatório")
    .oneOf([yup.ref("senha")],"Senhas Diferentes"),

  })

  const { register, handleSubmit,errors } = useForm({
    resolver: yupResolver(schema),
  })

  const handleForm = (value) =>{
    console.log(value)
  }

    return (
      <>
      <form onSubmit ={handleSubmit(handleForm)}>
        <input type="text" name ="" placeholder="name" ref={register}/>
        <p>{errors.name?.message}</p>
        <input type="text" name ="" placeholder="password" ref={register}/>
        <p>{errors.password?.message}</p>
        <input type="text" name ="" placeholder="confirmPassword" ref={register}/>
        <p>{errors.confirmPassword?.message}</p>
        <button type="submit">Register</button>
      </form>
      </>
    )
}

export default SingUp