const mongoose = require("mongoose");

const urlSchema = mongoose.Schema(
  {
    shortId: {
      type: String,
      required: true,
      unique: true,
    },
    redirectURL: {
      type: String,
      require: true,
    },
    visitHistory: [
      {
        timestamp: { type: Number }, // Kati baje click vako thiyo vanera...
      },
    ],
  },
  {
    timestamps: true, // kati baje user entries vayo vanera
  }
);

const URL = mongoose.model("url", urlSchema);

module.exports = URL;
