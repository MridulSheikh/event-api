import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { serviceValidation } from './service.validation';
import { serviceController } from './service.controller';
const router = express.Router();

router.post(
  '/',
  validateRequest(serviceValidation.createServiceValidationSchema),
  serviceController.createServiceIntoDB,
);

router.get('/', serviceController.getServiceFromDB);

router.patch(
  '/:id',
  validateRequest(serviceValidation.updateServiceValidationSchema),
  serviceController.updateServiceIntoDB,
);

router.delete('/:id', serviceController.deleteServiceIntoDB);

export const serviceRoute = router;
