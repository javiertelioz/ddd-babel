import { Schema, model } from 'mongoose';

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      index: true,
      trim: true,
      required: [true, 'The firstName is required.'],
    },
    lastName: {
      trim: true,
      type: String,
      required: [true, 'The lastName is required.'],
    },
    email: {
      type: String,
      trim: true,
      index: true,
    },
    password: {
      type: String,
      required: [true, 'The password is required.'],
    },
  },
  {
    timestamps: true,
  }
);

export default model('User', UserSchema);
