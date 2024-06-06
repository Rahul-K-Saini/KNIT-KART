import { Schema, model } from 'mongoose';

const otpSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  otp: Number,
  expiresAt: {
    type: Date,
    expires: '5m', 
    default: Date.now
  }
}, { timestamps: true });

otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const OTP = model("otp", otpSchema);

export default OTP;