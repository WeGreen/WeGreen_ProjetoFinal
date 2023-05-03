import {z} from 'zod';


export const LoginSchema = z.object({
   
    email: z
      .string()
      .min(1, 'O E-mail é obrigatório.')
       .email('Digite um e-mail válido.'),
    password: z
      .string()
      .min(7, 'A senha é obrigatória e precisa de no mínimo 7 caracteres')
      .regex(/(?=.*?[A-Z])/, 'É necessário ao menos uma letra maiúscula')
      .regex(/(?=.*?[a-z])/, 'É necessário ao menos uma letra minúscula')
      .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número'), 
  })

  export type TLoginValues = z.infer<typeof LoginSchema>;