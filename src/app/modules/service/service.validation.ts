import { z } from 'zod';

const createServiceValidationSchema = z.object({
  body: z.object({
    img: z.string(),
    title: z.string(),
    discription: z.string(),
  }),
});

const updateServiceValidationSchema = z.object({
  body: z.object({
    img: z.string().optional(),
    title: z.string().optional(),
    discription: z.string().optional(),
  }),
});

export const serviceValidation = {
  createServiceValidationSchema,
  updateServiceValidationSchema,
};
