// src/models/Booking.ts
import { Schema, model, Document, Types } from "mongoose";

export interface IBooking extends Document {
  user: Types.ObjectId;
  driver?: Types.ObjectId;

  scheduled_date: Date;
  start_time?: Date;
  actual_start_time?: Date;
  end_time?: Date;

  duration_hours: number;

  ride_type: "round_trip" | "one_way";

  vehicle_mode:
    | "manual"
    | "automatic"
    | "semi-automatic"
    | "cvt"
    | "electric"
    | "hybrid";

  vehicle_type: "hatchback" | "suv" | "luxury" | "sedan";

  is_extended: boolean;
  extended_hours: number;
  total_hours: number;

  base_fare: number;
  distance_fare: number;
  gst_percentage: number;
  gst_amount: number;
  fare: number;

  pending_penalty: number;
  total_distance: number;

  status:
    | "pending"
    | "confirmed"
    | "pending_payment"
    | "paid"
    | "pending_user_start"
    | "in_progress"
    | "pending_user_end"
    | "pending_extension_approval"
    | "pending_extension_payment"
    | "completed"
    | "cancelled";

  cancelledBy?: "user" | "driver" | "system";

  pickup_location: {
    type: "Point";
    coordinates: number[];
  };

  destination_location: {
    type: "Point";
    coordinates: number[];
  };

  pickup_address_lane: string;
  destination_address_lane: string;
  extension_address_lane?: string;

  extension_fare?: number;
  extension_distance_fare?: number;
  extension_gst_amount?: number;
  extension_total_amount?: number;
  extension_payment_timeout?: Date;
  extension_payment_id?: string;
  extension_approved_at?: Date;

  pending_destination_location: {
    type: "Point";
    coordinates: number[];
  };

  start_attempts: number;
  driver_arrived_time?: Date;
  user_acceptance_timeout?: Date;

  auto_assigned: boolean;
  budget?: number;
  offer_candidates?: Types.ObjectId[];
  offer_expires_at?: Date;

  end_attempts: number;
  driver_end_time?: Date;
  user_end_timeout?: Date;

  extend_reminder_sent: boolean;

  payment_status: "pending" | "paid" | "failed" | "refunded";
  payment_id?: string;
  payment_method: "card" | "upi" | "wallet" | "cash" | "razorpay";
  payment_timeout?: Date;

  start_images: string[];
  end_images: string[];

  createdAt: Date;
  updatedAt: Date;
}

const BookingSchema = new Schema<IBooking>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    driver: { type: Schema.Types.ObjectId, ref: "DriverProfile" },

    scheduled_date: { type: Date, required: true },
    start_time: Date,
    actual_start_time: Date,
    end_time: Date,

    duration_hours: { type: Number, required: true },

    ride_type: { type: String, enum: ["round_trip", "one_way"], required: true },

    vehicle_mode: {
      type: String,
      enum: ["manual", "automatic", "semi-automatic", "cvt", "electric", "hybrid"],
      required: true
    },

    vehicle_type: {
      type: String,
      enum: ["hatchback", "suv", "luxury", "sedan"],
      required: true
    },

    is_extended: { type: Boolean, default: false },
    extended_hours: { type: Number, default: 0 },
    total_hours: { type: Number, required: true },

    base_fare: { type: Number, required: true },
    distance_fare: { type: Number, default: 0 },
    gst_percentage: { type: Number, default: 5 },
    gst_amount: { type: Number, required: true },
    fare: { type: Number, required: true },

    pending_penalty: { type: Number, default: 0 },
    total_distance: { type: Number, default: 0 },

    status: {
      type: String,
      enum: [
        "pending",
        "confirmed",
        "pending_payment",
        "paid",
        "pending_user_start",
        "in_progress",
        "pending_user_end",
        "pending_extension_approval",
        "pending_extension_payment",
        "completed",
        "cancelled"
      ],
      default: "pending"
    },

    cancelledBy: { type: String, enum: ["user", "driver", "system"] },

    pickup_location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], default: [0, 0] }
    },

    destination_location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], default: [0, 0] }
    },

    pickup_address_lane: { type: String, required: true },
    destination_address_lane: { type: String, required: true },
    extension_address_lane: { type: String },

    extension_fare: Number,
    extension_distance_fare: Number,
    extension_gst_amount: Number,
    extension_total_amount: Number,
    extension_payment_timeout: Date,
    extension_payment_id: String,
    extension_approved_at: Date,

    pending_destination_location: {
      type: { type: String, enum: ["Point"], default: "Point" },
      coordinates: { type: [Number], default: [0, 0] }
    },

    start_attempts: { type: Number, default: 0 },
    driver_arrived_time: Date,
    user_acceptance_timeout: Date,

    auto_assigned: { type: Boolean, default: false },
    budget: Number,
    offer_candidates: [{ type: Schema.Types.ObjectId, ref: "DriverProfile" }],
    offer_expires_at: Date,

    end_attempts: { type: Number, default: 0 },
    driver_end_time: Date,
    user_end_timeout: Date,

    extend_reminder_sent: { type: Boolean, default: false },

    payment_status: {
      type: String,
      enum: ["pending", "paid", "failed", "refunded"],
      default: "pending"
    },
    payment_id: String,
    payment_method: {
      type: String,
      enum: ["card", "upi", "wallet", "cash", "razorpay"],
      default: "card"
    },
    payment_timeout: Date,

    start_images: { type: [String], default: [] },
    end_images: { type: [String], default: [] }
  },
  { timestamps: true }
);

BookingSchema.index({ pickup_location: "2dsphere" });
BookingSchema.index({ destination_location: "2dsphere" });

export default model<IBooking>("Booking", BookingSchema);
