import { z } from "zod";

export const orderSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  contact: z
    .string()
    .min(6, "Enter a valid phone or email")
    .refine(
      (val) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+?[0-9\s\-]{6,20}$/;
        return emailRegex.test(val) || phoneRegex.test(val);
      },
      { message: "Must be a valid email or phone number" },
    ),
  garmentType: z.string({ required_error: "Please select a garment type" }),
  quantity: z.coerce
    .number()
    .int()
    .min(1, "Quantity must be at least 1")
    .max(10000),
  deadline: z.string().optional().or(z.literal("")),
  notes: z.string().max(1000, "Notes cannot exceed 1000 characters").optional(),
});

export type OrderInput = z.infer<typeof orderSchema>;
