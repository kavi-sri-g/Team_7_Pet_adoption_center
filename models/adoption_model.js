//kavisri - team member 1 - task 7

import mongoose from "mongoose";
const adoptionSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true,
  },
  adopterName: {
    type: String,
    required: true,
  },
  adoptionDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "approved", "canceled"],
    required: false,
  },
});
const adoption_model = mongoose.model("adoption_model", adoptionSchema);
export default adoption_model;
