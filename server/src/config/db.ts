// src/config/db.ts
import mongoose from 'mongoose';

export async function connectDB(uri: string) {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri);
    console.log('Mongo connected ✔️');
  } catch (err) {
    console.error('Mongo connection failed ❌', err);
    process.exit(1);
  }
}
