import mongoose from "mongoose";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please enter your email!"],
  },

  phoneNumber: [
    {
      type: String,
    },
  ],

  addresses: [
    {
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      address1: {
        type: String,
      },
      address2: {
        type: String,
      },
      type: { type: String, enum: ["PRIVATE", "PUBLIC"] },
      postalCode: { type: String },
    },
  ],
  sex: {
    type: String,
    enum: ["MALE", "FEMALE", "OTHER", "NONE"],
    default: "NONE",
  },
  birth: { type: Date },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  account: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Account",
    },
  ],
});

// jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

const User = mongoose.model("User", userSchema);
export default User;
