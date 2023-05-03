import { z } from "zod";

export const EditTaskSchema = z.object({
  title: z.string().nonempty("Campo obrigatório.").min(5, "A descrição da tarefa deve conter no mínimo cinco caracteres"),
});

export type TEditTaskFormValues = z.infer<typeof EditTaskSchema>;