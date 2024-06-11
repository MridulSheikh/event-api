import { z } from 'zod';

const createRecentEventValidationSchema = z.object({
  body: z.object({
    img: z.any(),
  }),
});

export const recentEventValidation = {
  createRecentEventValidationSchema,
};
