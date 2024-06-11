import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { recentEventValidation } from './recentEvent.validation';
import { recentEventController } from './recentEvent.controller';
const router = express.Router();

router.post(
  '/',
  validateRequest(recentEventValidation.createRecentEventValidationSchema),
  recentEventController.createRecentEvent,
);

router.get('/', recentEventController.getRecentEvent);

router.patch(
  '/:id',
  validateRequest(recentEventValidation.createRecentEventValidationSchema),
  recentEventController.updateRecentEvent,
);

router.delete('/:id', recentEventController.deleteRecentEvent);

export const recentEventRoute = router;
