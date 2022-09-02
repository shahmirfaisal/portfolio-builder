import { Schema, models, model } from "mongoose";

const isValidUrl = (urlString) => {
  try {
    return Boolean(new URL(urlString));
  } catch (e) {
    return false;
  }
};

const projectSchema = new Schema({
  image: {
    type: String,
    required: [true, "Add image!"],
    validate: {
      validator: (v) => v.length,
      message: "Add image!",
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

  preview: {
    type: String,
    required: [true, "Add preview link!"],
    validate: {
      validator: (v) => isValidUrl(v),
      message: "Invalid URL!",
    },
    set: (v) => v.trim(),
  },

  github: {
    type: String,
    required: [true, "Add github link!"],
    validate: {
      validator: (v) => isValidUrl(v),
      message: "Invalid URL!",
    },
    set: (v) => v.trim(),
  },

  technologies: [
    {
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
    },
  ],

  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

export default models.Project || model("Project", projectSchema);
