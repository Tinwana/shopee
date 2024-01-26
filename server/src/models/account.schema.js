import mongoose from "mongoose";
const accountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, require: true },
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
