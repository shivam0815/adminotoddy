import { Schema, model } from "mongoose";

const PayoutSchema = new Schema(
  {
    driverId: String,
    amount: Number,
    status: { type: String, enum: ["PENDING","PAID"], default: "PENDING" }
  },
  { timestamps: true }
);

export default model("Payout", PayoutSchema);
