import { Schema, model } from 'mongoose';

const PetSchema = new Schema(
  {
    name: {
      type: String,
      index: true,
      trim: true,
      required: [true, 'The name is required.'],
    },
    description: {
      trim: true,
      type: String,
      required: [true, 'The description is required.'],
    },
    image: {
      type: String,
      trim: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      required: [true, 'The user is required.'],
    },
    status: {
      index: true,
      type: String,
      required: [true, 'The status is required.'],
    },
    dob: {
      type: Date,
      default: null,
    },
    address: {
      street: {
        type: String,
        trim: true,
        index: true,
      },
      zip: {
        index: true,
        type: String,
        minlength: 5,
        maxlength: 7,
      },
      city: {
        type: String,
        trim: true,
      },
      state: {
        type: String,
        trim: true,
      },
      country: {
        type: String,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default model('pet', PetSchema);
