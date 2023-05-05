import { z } from "zod";

export const EditPostSchema = z.object({
  title: z.string().nonempty("Campo obrigatório."),
  content: z.string().nonempty("Campo obrigatório."),
});

export type TEditPostFormValues = z.infer<typeof EditPostSchema>;