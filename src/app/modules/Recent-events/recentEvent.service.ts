import { TRecentEvent } from './recentEvent.interface';
import { recentEvent } from './recentEvent.modal';

const createRecentEvent = async (payload: TRecentEvent) => {
  const result = await recentEvent.create(payload);
  return result;
};

const updateRecentEvent = async (payload: TRecentEvent, id: string) => {
  const result = await recentEvent.findByIdAndUpdate(id, payload);
  return result;
};

const deleteRecentEvent = async (id: string) => {
  const result = await recentEvent.findByIdAndDelete(id);
  return result;
};

export const recentEventService = {
  createRecentEvent,
  updateRecentEvent,
  deleteRecentEvent,
};
