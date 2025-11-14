import { Schema, model } from "mongoose";

const RideSchema = new Schema(
  {
    driverId: { type: String, required: true },
    customerId: { type: String, required: true },
    status: { type: String, enum: ["BOOKED","ONGOING","COMPLETED","CANCELLED"], default: "BOOKED" },
    amount: Number,
  },
  { timestamps: true }
);

export default model("Ride", RideSchema);
