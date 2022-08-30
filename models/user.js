import { Schema, model, models } from "mongoose";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name!"],
    validate: {
      validator: function (v) {
        return v.length;
      },
      message: "Please add a name!",
    },
    set: (v) => v.trim(),
  },

  username: {
    type: String,
    validate: {
      validator: function (v) {
        return v.length;
      },
      message: "Please add a username!",
    },
    set: (v) => v.trim(),
  },

  email: {
    type: String,
    required: [true, "Please add an email!"],
    validate: {
      validator: function (v) {
        return EMAIL_REGEX.test(v);
      },
      message: "Please add a valid email!",
    },
    set: (v) => v.trim(),
  },

  emailVerified: Boolean,

  image: {
    type: String,
    default: "http://localhost:3000/default-profile-pic.jpg",
  },

  password: {
    type: String,
    validate: {
      validator: function (v) {
        return v.length >= 6 && v.length <= 32;
      },
      message: "Password's length should be between 6 and 32!",
    },
  },
});

export default models.User || model("User", userSchema);
