import { z } from "zod";

export const CreateTaskSchema = z.object({
  title: z.string().nonempty("Campo obrigatório.").min(5, "A descrição da tarefa deve conter no mínimo cinco caracteres"),
});

export type TCreateTaskFormValues = z.infer<typeof CreateTaskSchema>;