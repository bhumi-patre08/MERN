import { z } from "zod";
export const userSchema = z.object({
 name: z
 .string()
 .trim()
 .min(3, "Name must contain at least 3 characters"),
 email: z
 .string()
 .trim()
 .email("Enter a valid email address"),
 age: z
 .number()
 .int()
 .min(18, "Age must be at least 18")
 .max(100, "Age cannot exceed 100"),
 password: z
 .string()
 .min(8, "Password must contain at least 8 characters")
});