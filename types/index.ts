import { z } from "zod";
import { SignUpSchema } from "@/lib/validation/sign-up-schema";

export type TSignUpFormSchema = z.infer<typeof SignUpSchema>;
