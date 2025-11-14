import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email?: string;
  phone?: string;
  DOB?: string;
  gender?: string;
  password: string;
  role: "user" | "driver";
  isVerified?: boolean;
  isApproved?: boolean;
  profilePicture?: string;
  penalty?: number;
  fcmToken?: string;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, sparse: true },
    phone: { type: String, unique: true, sparse: true },
    DOB: { type: String },
    gender: { type: String },

    password: { type: String, required: true },

    role: {
      type: String,
      enum: ["user", "driver"],
      required: true,
    },

    isVerified: { type: Boolean, default: false },
    isApproved: { type: Boolean, default: false },
    profilePicture: { type: String },
    penalty: { type: Number, default: 0 },
    fcmToken: { type: String, default: null }
  },
  { timestamps: true }
);

export default model("User", UserSchema);
