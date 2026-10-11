const { z } = require("zod");
const userSchema = z.object({
 name: z
 .string()
 .trim()
 .min(3, "Name must contain at least 3 characters")
 .max(50, "Name cannot exceed 50 characters"),
 email: z
 .string()
 .trim()
 .email("Invalid email address"),
 age: z
 .number()
 .int("Age must be an integer")
 .min(18, "Age must be at least 18")
 .max(100, "Age cannot exceed 100"),
 password: z
 .string()
 .min(8, "Password must contain at least 8 characters")
 .max(100, "Password is too long")
});
module.exports = userSchema;