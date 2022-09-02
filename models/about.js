import { Schema, models, model } from "mongoose";

const aboutSchema = new Schema({
  image: {
    type: String,
    required: [true, "Please upload an image!"],
    validate: {
      validator: (v) => v.length,
      message: "Please upload an image!",
    },
    set: (v) => v.trim(),
  },

  name: {
    type: String,
    required: [true, "Add name!"],
    validate: {
      validator: (v) => v.length,
      message: "Add name!",
    },
    set: (v) => v.trim(),
  },

  title: {
    type: String,
    required: [true, "Add title!"],
    validate: {
      validator: (v) => v.length,
      message: "Add title!",
    },
    set: (v) => v.trim(),
  },

  description: {
    type: String,
    required: [true, "Add description!"],
    validate: {
      validator: (v) => v.length,
      message: "Add description!",
    },
    set: (v) => v.trim(),
  },

  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

export default models.About || model("About", aboutSchema);
