// src/models/DriverProfile.ts
import { Schema, model, Document, Types } from 'mongoose';

export interface IDriverProfile extends Document {
  user: Types.ObjectId;
  license_number: string;
  aadhar_number: string;
  vehicle_type: string;
  profilePicture: string;
  is_available: boolean;
  location: {
    type: 'Point';
    coordinates: number[]; // [lng, lat]
  };
  rating: number;
  rate_per_hour?: number;
  rate_per_day?: number;
  experience: number;
  total_rides: number;
  fcmToken?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

const DriverProfileSchema = new Schema<IDriverProfile>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      unique: true,
    },

    license_number: {
      type: String,
      required: true,
    },

    aadhar_number: {
      type: String,
      required: true,
      validate: {
        validator: function (v: string) {
          return /^\d{12}$/.test(v); // 12 digits
        },
        message: 'Aadhar number must be exactly 12 digits',
      },
    },

    vehicle_type: {
      type: String,
      required: true,
    },

    profilePicture: {
      type: String,
      required: true,
    },

    is_available: {
      type: Boolean,
      default: true,
    },

    location: {
      type: { type: String, enum: ['Point'], default: 'Point' },
      coordinates: { type: [Number], default: [0, 0] },
    },

    rating: {
      type: Number,
      default: 0.0,
    },

    rate_per_hour: {
      type: Number,
      required: false,
    },

    rate_per_day: {
      type: Number,
      required: false,
    },

    experience: {
      type: Number,
      default: 0,
    },

    total_rides: {
      type: Number,
      default: 0,
    },

    fcmToken: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

DriverProfileSchema.index({ location: '2dsphere' });

export default model<IDriverProfile>('DriverProfile', DriverProfileSchema);
