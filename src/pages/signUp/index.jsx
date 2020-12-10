import {useState} from 'react';

import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const SingUp = () =>{
  const schema = yup.object().shape({

    name:yup
    .string()
    .required("Campo Obrigatório")
    .min(6)
    .matches(/^(.[a-zÀ-ÿ].+\s).+$/i,"nome deve ter sobrenome, deve ser sem número ou caracter especial"),

    password:yup
    .string()
    .required("Campo Obrigatório"),
    
    email:yup
    .string()
    .email("Email invalído")
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
        <input type="text" name ="name" placeholder="Name" ref={register}/>
        <p>{errors.name?.message}</p>
        <input type="text" name ="email" placeholder="E-mail" ref={register}/>
        <p>{errors.email?.message}</p>
        <input type="text" name ="password" placeholder="Password" ref={register}/>
        <p>{errors.password?.message}</p>
        <input type="text" name ="confirmPassword" placeholder="Confirm Password" ref={register}/>
        <p>{errors.confirmPassword?.message}</p>
        <button type="submit">Register</button>
      </form>
      </>
    )
}

export default SingUp