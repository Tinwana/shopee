import mongoose from "mongoose";
const accountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cart: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: { type: Number, required: true },
    },
  ],
  userId: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "User" },
  shop: {
    id: { type: mongoose.Schema.Types.ObjectId },
    name: { type: String, required: true },
    description: { type: String },
    phoneNumber: [{ type: String }],
    address: [
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
    avatar: { type: String },
    withdraw: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    availableBalance: { type: Number, required: true, default: 0 },
    exchange: [
      {
        amount: { type: Number, required: true },
        status: {
          type: String,
          required: true,
          enum: ["SUCCESS", "FAILURE", "PENDING"],
          default: "PENDING",
        },
      },
    ],
    active: { type: Boolean, default: false },
  },
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  type: { type: String, require: true, default: "email" },
  provider: { type: String, require: true, default: "credential" },
  providerAccountId: {
    type: String || mongoose.Schema.Types.ObjectId,
    require: true,
  },
  password: {
    type: String,
  },
  accessToken: { type: String },
  refreshToken: { type: String },
  role: {
    type: String,
    enum: ["ADMIN", "SELLER", "USER"],
    default: "USER",
  },
  avatar: { type: String },
  verifyEmail: { type: Boolean, required: true },
});
const Account = mongoose.model("Account", accountSchema);
export default Account;
