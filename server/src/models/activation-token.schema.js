import mongoose from "mongoose";

const activationTokenSchema = new mongoose.Schema({
  token: { type: String, require: true },
  email: { type: String, require: true },
});
const ActivationToken = mongoose.model(
  "ActivationToken",
  activationTokenSchema
);
export default ActivationToken;
