import { Router } from "express";
import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  createMovieByImdbId,
} from "../controllers/movieController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = Router();

router.get("/get", getAllMovies);
router.get("/get/:id", getMovieById);
router.post("/add", authMiddleware, createMovie);
router.post("/add-imdb", authMiddleware, createMovieByImdbId);
router.put("/update/:id", authMiddleware, updateMovie);
router.delete("/delete/:id", authMiddleware, deleteMovie);

export default router;
