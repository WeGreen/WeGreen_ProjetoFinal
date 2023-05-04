import {z} from 'zod';


export const LoginSchema = z.object({
   
    email: z
      .string()
      .min(1, 'O E-mail é obrigatório.')
       .email('Digite um e-mail válido.'),
    password: z
      .string()
      .nonempty("Digite a senha."),
  })

  export type TLoginValues = z.infer<typeof LoginSchema>;