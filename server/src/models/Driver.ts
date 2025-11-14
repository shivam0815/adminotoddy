// src/models/Driver.ts
import { Schema, model } from 'mongoose';

const DriverSchema = new Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    status: {
      type: String,
      enum: ['ACTIVE', 'INACTIVE', 'BLOCKED'],
      default: 'ACTIVE',
    },
    city: { type: String },
  },
  { timestamps: true }
);

const Driver = model('Driver', DriverSchema);

export default Driver;
