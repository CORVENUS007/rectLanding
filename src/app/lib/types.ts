import { z } from "zod";

const userNameRegex: RegExp = new RegExp("^[a-zA-Z]+$");
const userEmailRegex: RegExp = new RegExp(
  "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$"
);
const mobileNumberRegex: RegExp = new RegExp("[6-9]{1}[0-9]{9}");

export const signUpSchema = z.object({
  first_name: z
    .string()
    .regex(userNameRegex, "Enter a valid first name")
    .min(3, { message: "First name must be at least 5 characters long" })
    .max(20, { message: "First name can't be longer than 20 characters" }),
  last_name: z
    .string()
    .regex(userNameRegex, "Enter a last name")
    // .min(0, { message: "Last name must be at least 1 character long" })
    .max(20, { message: "Last name can't be longer than 20 characters" }),
  email: z.string().regex(userEmailRegex, { message: "Invalid Email" }),

  phone_no: z
    .string()
    .regex(mobileNumberRegex, {
      message: "That doesn't seem to be a correct phone number",
    })
    .min(10, { message: "That doesn't seem to be a correct phone number" })
    .max(10, { message: "That doesn't seem to be a correct phone number" }),
  // .regex(mobileNumberRegex, {

  organization_name: z
    .string()
    .min(5, { message: "Org name must be at least 5 characters long" })
    .max(20, { message: "Org name can't be longer than 20 characters" }),

  password: z.string().min(10, "Password must contain at least 10 characters"),
  // confirmPassword: z.string(),
});
// if you want to match two fields data then this below code snippet is used Suraj The legend
// .refine((data) => data.password === data.confirmPassword, {
//   message: "Passwords must match",
//   path: ["confirmPassword"],
// });

export type TSignUpSchema = z.infer<typeof signUpSchema>;

export const loginSchema = z.object({
  email: z
    .string()
    .regex(userEmailRegex, { message: "Please enter a valid email" }),
});

export type TloginSchema = z.infer<typeof loginSchema>;
