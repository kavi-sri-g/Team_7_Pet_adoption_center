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
router.put("/adopter_put/:id", async (req, res) => {
  try {
    const adopter3 = await adopter_model.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!adopter3)
      return res.status(404).send({ message: "Adopter not found" });
    res.status(200).send(adopter3);
  } catch (error) {
    res.send(error);
  }
});
router.delete("/adopter_d/:id", async (req, res) => {
  try {
    const adopter4 = await adopter_model.findByIdAndDelete(req.params.id);
    if (!adopter4)
      return res.status(404).send({ message: "Adopter not found" });
    res.status(200).send({ message: "Adopter deleted successfully" });
  } catch (error) {
    res.send(error);
  }
});
export default router;
