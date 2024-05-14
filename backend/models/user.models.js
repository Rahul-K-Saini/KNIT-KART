import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: function (email) {
          email = email.trim();
          return email.split("@")[1] == "knit.ac.in";
        },
        message: "Please enter a KNIT domain email address",
      },
    },

    branch: {
      type: String,
      lowercase: true,
      enum: [
        "mca",
        "computer science",
        "information technology",
        "electronics",
        "electrical",
        "civil",
        "mechanical",
      ],
    },
    year: {
      type: String,
      enum: ["1st Year", "2nd Year", "3rd Year", "Final Year"],
    },
    hostel: {
      type: String,
      enum: ["aryabhatt", "ramanujan", "khosla","gargi","new maitreyee","old maitreyee","vikram sarabhai","raman","kalam","meghnath shah","old vs","new vs"],
    },
    profile_pic: {
      type: String,
      lowercase: true,
      default:
        "https://res.cloudinary.com/dkevdedjr/image/upload/v1715405517/profile/user_vep4im.png"
    },
    gender: {
      type: String,
      lowercase: true,
      enum: ["male", "female", "prefer not to say"],
    },
    course: {
      type: String,
      lowercase: true,
      enum: ["mca", "b.tech", "m.tech"],
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
