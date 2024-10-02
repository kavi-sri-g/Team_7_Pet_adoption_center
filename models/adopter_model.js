import mongoose from "mongoose";
const adopterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
});
const adopter_model = mongoose.model("adopter_model", adopterSchema);
export default adopter_model;
