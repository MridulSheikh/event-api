import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { EventItemValidattions } from './evenItem.validation';
import { eventItemController } from './eventItem.controller';
const router = express.Router();

router.post(
  '/',
  validateRequest(EventItemValidattions.createEventItemValidationSchema),
  eventItemController.createEvent,
);

router.get('/', eventItemController.getEvent);

router.patch(
  '/:id',
  validateRequest(EventItemValidattions.updateEventItemValidationSchema),
  eventItemController.updateEvent,
);

router.delete('/:id', eventItemController.deleteEventItem);

export const eventItemRoutes = router;
