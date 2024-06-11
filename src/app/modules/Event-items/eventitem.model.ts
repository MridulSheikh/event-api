import { Schema, model } from 'mongoose';
import { TEventitem } from './evntItem.interface';

const eventItemSchema = new Schema<TEventitem>(
  {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

export const EventItem = model<TEventitem>('EventItem', eventItemSchema);
