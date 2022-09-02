import { Schema, models, model } from "mongoose";

const skillSchema = new Schema({
  name: {
    type: String,
    required: [true, "Add name!"],
    validate: {
      validator: (v) => v.length,
      message: "Add name!",
    },
    set: (v) => v.trim(),
  },

  icon: {
    type: String,
    required: [true, "Add icon!"],
    validate: {
      validator: (v) => v.length,
      message: "Add icon!",
    },
    set: (v) => v.trim(),
  },

  color: {
    type: String,
    required: [true, "Add color!"],
    validate: {
      validator: (v) => v.length,
      message: "Add color!",
    },
    set: (v) => v.trim(),
  },

  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

export default models.Skill || model("Skill", skillSchema);
