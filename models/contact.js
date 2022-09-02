import { Schema, models, model } from "mongoose";

const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const contactSchema = new Schema({
  email: {
    type: String,
    required: [true, "Add Email!"],
    validate: {
      validator: (v) => EMAIL_REGEX.test(v),
      message: "Invalid Email!",
    },
    set: (v) => v.trim(),
  },

  phone: {
    type: String,
    required: [true, "Add phone number!"],
    validate: {
      validator: (v) => v.length,
      message: "Add phone number!",
    },
    set: (v) => v.trim(),
  },

  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

export default models.Contact || model("Contact", contactSchema);
