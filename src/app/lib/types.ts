import { z } from "zod";


const userEmailRegex: RegExp = new RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})+"

);






export const loginSchema = z.object({
  email: z
    .string()
    .regex(userEmailRegex, { message: "Please enter a valid email" }),
});

export type TloginSchema = z.infer<typeof loginSchema>;
