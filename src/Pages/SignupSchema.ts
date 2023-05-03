import { z } from 'zod';

export const SignupSchema = z.object({
  name: z.string().min(2, 'o nome é obrigatório'),
  email: z
    .string()
    .min(1, 'O E-mail é obrigatório.')
    .email('Digite um e-mail válido.'),
  password: z
    .string()
    .min(7, 'A senha é obrigatória e precisa de no mínimo 7 caracteres')
    .regex(/(?=.*?[A-Z])/, 'É necessário ao menos uma letra maiúscula')
    .regex(/(?=.*?[a-z])/, 'É necessário ao menos uma letra minúscula')
    .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número')
    .regex(/(?=.*?[!}{,.^?~=+\-_\/*\-+.\|])/, 'É necessário pelo menos uma caractere espacial'),
    confirmPassword : z.string().min(1, 'A confirmação de senha é obrigatória.'),
})

.refine(({ password , confirmPassword}) => password === confirmPassword, {
    message: 'As senhas precisam ser iguais.',
    path:['confirmPassword'],
});
 

export type TSignupValues = z.infer<typeof SignupSchema>;
