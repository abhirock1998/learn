const { z } = require("zod");

const userSchema = z.object({
  name: z.string().min(1, "Name is required"),
  jobTitle: z.string().min(1, "Job Title is required"),
  companyName: z.string().optional(), // optional if not mandatory
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z
    .string()
    .regex(/^[0-9]{10,15}$/, "Phone Number must be 10-15 digits"),
  address: z.string().min(1, "Address is required"),
});

module.exports = userSchema;
