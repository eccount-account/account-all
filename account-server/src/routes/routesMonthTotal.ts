import express from "express";
import { api as monthTotalController } from "../controllers/monthTotalController.js";
export const monthTotalRouter = express.Router();

monthTotalRouter.get('/', monthTotalController.getAllData);