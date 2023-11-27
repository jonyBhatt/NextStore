import { z } from "zod";

export const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, {
    message: "Your password must be 8 characters long",
  }),
});
