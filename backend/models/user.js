import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validite: {
      validator: function(email){
        return email.endsWith("@knit.ac.in");
      },
      message: "Please enter a knit domain email address"
    }
  },
  contact_no: {
    type: String,
    required: true,
    validite: {
      validator: function (num) { return num.length === 10 },
      message: 'Contact number should be of 10 digits'
    }
  },
  branch: {
    type: String,
    enum: ['mca', 'computer science', 'information technologyy', 'electronics', 'electrical', 'civil', 'mechanical'],
  },
  year: {
    type: Number,
    enum: [1, 2, 3, 4]
  },
  hostel: {
    type: String,
  },
  profile_pic: {
    type: String,
    default: "https://media.istockphoto.com/id/1305665241/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette-stock-illustration.jpg"
  },
  gender: {
    type: String,
    enum: ["male", "female", "prefer not to say"]
  },
  course: {
    type: String,
    enum: ["mca", "b.tech", "m.tech"]
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("user",userSchema);