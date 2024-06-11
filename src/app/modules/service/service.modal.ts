import { Schema, model } from 'mongoose';
import { TService } from './service.interface';

const serviceSchema = new Schema<TService>(
  {
    img: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    discription: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);

export const Service = model<TService>('service', serviceSchema);
