import express from "express";
import { create, get, getAll, remove, update } from "../Controllers/category";
// import { checkPermission } from "../middlewares/checkPermission";
const router = express.Router();

router.get("/categoryes", getAll);
router.get("/categoryes/:id", get);
router.post("/categoryes", create);
router.delete("/categoryes/:id", remove);
router.patch("/categoryes/:id", update);

export default router;