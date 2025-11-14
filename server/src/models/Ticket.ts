import { Schema, model } from "mongoose";

const TicketSchema = new Schema(
  {
    userId: String,
    message: String,
    status: { type: String, enum: ["OPEN","CLOSED"], default: "OPEN" }
  },
  { timestamps: true }
);

export default model("Ticket", TicketSchema);
