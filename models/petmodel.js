import mongoose from "mongoose";
const petSchema = new mongoose.Schema({
  petName: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  adoptionStatus: {
    type: Boolean,
    required: false,
  },
});
const pet_model = mongoose.model("pet_model", petSchema);
export default pet_model;
