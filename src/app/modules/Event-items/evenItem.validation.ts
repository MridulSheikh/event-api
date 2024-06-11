import { z } from 'zod';

const createEventItemValidationSchema = z.object({
  body: z.object({
    img: z.any(),
    title: z.string(),
  }),
});

const updateEventItemValidationSchema = z.object({
  body: z.object({
    img: z.any().optional(),
    title: z.string().optional(),
  }),
});

export const EventItemValidattions = {
  createEventItemValidationSchema,
  updateEventItemValidationSchema,
};
