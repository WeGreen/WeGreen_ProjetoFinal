import { z } from "zod";

export const CreatePostSchema = z.object({
  title: z.string().nonempty("Campo obrigatório."),
  content: z.string().nonempty("Campo obrigatório."),
});

export type TCreatePostFormValues = z.infer<typeof CreatePostSchema>;