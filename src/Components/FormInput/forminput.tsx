
import { Container, Input, Legend } from './formInputStyle'

interface InputProps{
  legend: string;
  placeholder: string;
}

const FormInput = ({legend , placeholder } : InputProps) => {
  return (
  <Container>
   <Legend>{legend}</Legend>
    <Input placeholder={placeholder}/>
  </Container>
  )
}

export default FormInput
