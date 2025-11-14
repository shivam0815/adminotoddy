// src/models/AdminUser.ts
import { Schema, model } from 'mongoose';

export type AdminRole = 'SUPERADMIN' | 'ADMIN' | 'OPS' | 'FINANCE' | 'SUPPORT';

const AdminUserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ['SUPERADMIN', 'ADMIN', 'OPS', 'FINANCE', 'SUPPORT'],
      default: 'ADMIN',
    },
  },
  { timestamps: true }
);

const AdminUser = model('AdminUser', AdminUserSchema);

export default AdminUser;
