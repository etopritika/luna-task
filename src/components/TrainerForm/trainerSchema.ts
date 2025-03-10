import { z } from "zod";

export const trainerSchema = z.object({
  firstName: z
    .string()
    .min(2, "Min length is 2")
    .max(12, "Max length is 12")
    .regex(/^[A-Za-z]+$/, "Only letters a-z / A-Z allowed"),
  lastName: z
    .string()
    .min(2, "Min length is 2")
    .max(12, "Max length is 12")
    .regex(/^[A-Za-z]+$/, "Only letters a-z / A-Z allowed"),
});

export type TrainerFormValues = z.infer<typeof trainerSchema>;
