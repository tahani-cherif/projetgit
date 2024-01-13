import mongoose from "mongoose";
const { Schema, model } = mongoose;
const MenuShema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    paysOrigine: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Menu", MenuShema);
