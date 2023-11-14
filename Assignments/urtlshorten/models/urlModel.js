const { Schema, model } = require("mongoose");

const urlSchema = new Schema(
  {
    shortId: {
      type: String,
      require: true,
      unique: true,
    },
    redirecrURL: {
      type: String,
      require: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  {
    timestamps: true,
  }
);

const urlModel = model("URL", urlSchema);
module.exports = urlModel;
