import {Schema,model} from 'mongoose'

 const otpSchema = new Schema({
    email: {
    type: String,
    required:true,
  },
  otp: Number,
},{timestamps:true})


const OTP = model("otp", otpSchema);

export default OTP;
