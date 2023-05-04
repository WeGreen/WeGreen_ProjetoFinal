
import { UseFormRegisterReturn } from 'react-hook-form';
import { Container, Input, Legend } from './formInputStyle'

interface InputProps{
  id: string;
  type:string;
  label: string;
  register: any/* UseFormRegisterReturn */;
  placeholder: string;
  error:string | undefined;
}

const FormInput = ({id, type , label , placeholder , register , error } : InputProps) => {
  return (
  <Container>
   <Legend>{label}</Legend>
    <Input placeholder={placeholder} type={type} {...register(id)}/>
    <p>{error}</p>
  </Container>
  )
}

export default FormInput
