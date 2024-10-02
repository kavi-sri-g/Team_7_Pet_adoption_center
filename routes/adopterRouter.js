import Router from "express";
import adopter_model from "../models/adopter_model.js";
const router = Router();

//aksharasree_task2
router.post("/adopter_p", async (req, res) => {
  try {
    const adopter1 = adopter_model(req.body);
    await adopter1.save();
    res.send("Adopter added successfully");
  } catch (error) {
    res.send(error);
  }
});

router.get("/adopter_g", async (req, res) => {
  try {
    const adopter2 = await adopter_model.find();
    res.send(adopter2);
  } catch (error) {
    res.send(error);
  }
});
export default router;
