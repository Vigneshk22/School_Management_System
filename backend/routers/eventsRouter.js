import express from "express";
import { createEvent, getAllEvents } from "../controllers/eventsController.js";

const router = express.Router();

router.get('/getall', getAllEvents);
router.post('/', createEvent);

export default router;