import Router from "express";
import adoption_model from "../models/adoption_model.js";
const router = Router();
router.post("/adopt_p", async (req, res) => {
  try {
    const adopt1 = adoption_model(req.body);
    await adopt1.save();
    res.send("Adoption recorded successfully");
  } catch (error) {
    res.send(error);
  }
});
router.get("/adopt_g", async (req, res) => {
  try {
    const adopt2 = await adoption_model.find();
    res.send(adopt2);
  } catch (error) {
    res.send(error);
  }
});

export default router;
