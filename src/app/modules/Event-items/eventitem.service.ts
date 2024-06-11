import { EventItem } from './eventitem.model';
import { TEventitem } from './evntItem.interface';

const createEventItem = async (payload: TEventitem) => {
  const result = await EventItem.create(payload);
  return result;
};

const updateEventItem = async (payload: TEventitem, id: string) => {
  const result = await EventItem.findByIdAndUpdate(id, payload);
  return result;
};

const deleteEventItem = async (id: string) => {
  const result = await EventItem.findByIdAndDelete(id);
  return result;
};

export const eventItemService = {
  createEventItem,
  updateEventItem,
  deleteEventItem,
};
