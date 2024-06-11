import { TService } from './service.interface';
import { Service } from './service.modal';

const createService = async (payload: TService) => {
  const result = await Service.create(payload);
  return result;
};

const updateService = async (payload: TService, id: string) => {
  const result = await Service.findByIdAndUpdate(id, payload);
  return result;
};

const deleteService = async (id: string) => {
  const result = await Service.findByIdAndDelete(id);
  return result;
};

export const ServiceService = {
  createService,
  updateService,
  deleteService,
};
