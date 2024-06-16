import mongoose, { Schema } from "mongoose";

const vehicleSchema = new Schema({
  condition: {
    type: String,
  },
  description: { type: String },
  title: { type: String },
  brand: { type: String },
  price: { type: String },
  product_type: { type: String },
  custom_label_0: { type: String },
  timestamp: {
    type: Date,
  },
});

export const vehicles = mongoose.model("vehicles", vehicleSchema);
