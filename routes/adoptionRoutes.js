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
router.put("/adopt_put/:id", async (req, res) => {
  try {
    const adopt3 = await adoption_model.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!adopt3)
      return res.status(404).send({ message: "Adoption cannot be recorded" });
    res.status(200).send(adopt3);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/adopt_d/:id", async (req, res) => {
  try {
    const adopt4 = await adoption_model.findByIdAndDelete(req.params.id);
    if (!adopt4)
      return res.status(404).send({ message: "Adoption cannot be found" });
    res.status(200).send({ message: "Adoption deleted successfully" });
  } catch (error) {
    res.send(error);
  }
});

export default router;
