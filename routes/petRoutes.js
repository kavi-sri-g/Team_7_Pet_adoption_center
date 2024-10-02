import Router from "express";
import pet_model from "../models/petmodel.js";
const router = Router();

//dharanikumar - team member 3 - task 3
router.post("/pet_p", async (req, res) => {
  try {
    const pet1 = pet_model(req.body);
    await pet1.save();
    res.send("Pet added successfully");
  } catch (error) {
    res.send(error);
  }
});
router.get("/pet_g", async (req, res) => {
  try {
    const pet2 = await pet_model.find();
    res.send(pet2);
  } catch (error) {
    res.send(error);
  }
});
export default router;
