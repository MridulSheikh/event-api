import { Schema, model } from 'mongoose';
import { TRecentEvent } from './recentEvent.interface';

const recentEventSchema = new Schema<TRecentEvent>(
  {
    img: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

export const recentEvent = model<TRecentEvent>(
  'RecentEvent',
  recentEventSchema,
);
