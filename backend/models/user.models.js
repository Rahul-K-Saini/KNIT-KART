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
    contact: {
      type: String,
      required: true,
      lowercase: true,
      validate: [
        {
          validator: function (num) {
            return num.length === 10;
          },
          message: "Contact number should be of 10 digits",
        },
        {
          validator: function (num) {
            return validator.isNumeric(num);
          },
          message: "Contact number should contain only numeric digits",
        },
      ],
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
        "https://media.istockphoto.com/id/1305665241/vector/anonymous-gender-neutral-face-avatar-incognito-head-silhouette-stock-illustration.jpg",
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
      validate: {
        validator: function (password) {
          return password >= 8;
        },
        message: "Password must be at least 8 characters long",
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);

export default User;
