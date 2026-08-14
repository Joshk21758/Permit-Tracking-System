import { z } from "zod";

// register form schema
export const RegisterFormSchema = z
  .object({
    fullName: z.string().trim().min(2, { message: "Full name is required" }),
    email: z.string().trim(),
    password: z
      .string()
      .trim()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string().trim(),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// login form schema
export const LoginFormSchema = z.object({
  email: z.string().trim(),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters" }),
});

// Admin Register form schema

export const AdminRegisterFormSchema = z
  .object({
    name: z.string().trim().min(2, { message: "Full name is required" }),
    role: z.string().trim(),
    email: z.string().trim(),
    password: z
      .string()
      .trim()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string().trim(),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Admin Login form schema
export const AdminLoginFormSchema = z.object({
  email: z.string().trim(),
  password: z
    .string()
    .trim()
    .min(8, { message: "Password must be at least 8 characters" }),
});

//ForgotPassword schema
export const ForgotPasswordSchema = z.object({
  email: z.string().trim(),
});

//CodeInput schema
export const CodeResetSchema = z.object({
  code: z.number().min(6, { message: "Code must be 6 Digits long!" }),
});

//NewPassword schema
export const NewPasswordSchema = z
  .object({
    newPass: z
      .string()
      .trim()
      .min(8, { message: "Password must be atleast 8 characters long" }),
    confirmPassword: z.string().trim(),
  })
  .refine((val) => val.newPass === val.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

//Feedback schema
export const FeedbackSchema = z.object({
  name: z.string().trim(),
  email: z.string().trim(),
  message: z.string().trim(),
});

// Application form schema
export const UserApplicationSchema = z.object({
  appName: z.string().trim(),
  nationalId: z.string().trim(),
  address: z.string().trim(),
  phone: z.string().trim(),
  email: z.string().trim(),
  applicationType: z.string().trim(),
  applicationDescription: z.string().trim(),
});
